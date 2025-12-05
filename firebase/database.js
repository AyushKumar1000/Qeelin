;(function(){
  // Requires: firebase-app-compat.js, firebase-firestore-compat.js, firebase-storage-compat.js, and firebase/config.js (firebaseConfig)
  if (!window.firebase || !window.firebase.initializeApp) {
    console.error('[DB] Firebase SDK not found. Include compat scripts before database.js')
    return
  }
  const cfg = window.firebaseConfig || (typeof firebaseConfig !== 'undefined' ? firebaseConfig : null)
  if (!cfg) {
    console.error('[DB] firebaseConfig not found. Include firebase/config.js before database.js')
    return
  }

  let app, db, storage, auth
  try {
    app = firebase.apps && firebase.apps.length ? firebase.app() : firebase.initializeApp(cfg)
    db = firebase.firestore()
    storage = firebase.storage()
    auth = firebase.auth ? firebase.auth() : null
  } catch (e) {
    console.error('[DB] Firebase init error', e)
    return
  }

  async function ensureAuth(){
    try {
      if (!auth) return
      if (!auth.currentUser) {
        await auth.signInAnonymously()
      }
    } catch (e) {
      console.warn('[DB] Anonymous auth failed (proceeding if rules allow):', e)
    }
  }

  function productDocRef(id){
    return db.collection('products').doc(String(id))
  }

  async function nextProductId(){
    try {
      const snap = await db.collection('meta').doc('counters').get()
      const current = (snap.exists && snap.data().product || 0)
      const next = current + 1
      await db.collection('meta').doc('counters').set({ product: next }, { merge: true })
      return next
    } catch (e) {
      // Fallback: use null to signal auto-ID path
      return null
    }
  }

  async function uploadImagesToStorage(id, files){
    if(!files || files.length === 0) return []
    // Local storage workaround - create local URLs
    const uploads = Array.from(files).map(async (file, idx) => {
      if (typeof file === 'string') {
        return file // Return existing URLs as-is
      } else if (file instanceof File || (file && file.name)) {
        // Create a local URL that will be stored as a data URL
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.readAsDataURL(file)
        })
      }
      return null
    })
    const urls = (await Promise.all(uploads)).filter(Boolean)
    return urls
  }

  async function addOrUpdateProduct(product, files){
    try {
      await ensureAuth()
      const isEdit = !!product.id
      let id = isEdit ? String(product.id) : null
      // Create new doc ref with auto ID if needed
      let docRef = null
      if (!isEdit) {
        // try counter, if null fallback to auto id
        const counterId = await nextProductId()
        if (counterId != null) {
          id = String(counterId)
          docRef = productDocRef(id)
        } else {
          docRef = db.collection('products').doc()
          id = docRef.id
        }
      } else {
        docRef = productDocRef(id)
      }

      // Upload files; if upload fails, continue with URL images only
      let uploaded = []
      try {
        uploaded = await uploadImagesToStorage(id, files || [])
      } catch (e) {
        console.warn('[DB] image upload failed, saving without uploaded files', e)
      }
      const images = [...(product.images || []), ...uploaded]

      const payload = {
        id,
        name: product.name,
        category: product.category,
        price: Number(product.price),
        originalPrice: product.originalPrice ? Number(product.originalPrice) : null,
        sizes: product.sizes || [],
        color: product.color || '',
        stock: Number(product.stock || 0),
        description: product.description || '',
        images,
        isNew: product.isNew ?? !isEdit,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        createdAt: isEdit ? product.createdAt || firebase.firestore.FieldValue.serverTimestamp() : firebase.firestore.FieldValue.serverTimestamp(),
      }

      await docRef.set(payload, { merge: true })
      return id
    } catch (e) {
      console.error('[DB] addOrUpdateProduct error', e)
      throw e
    }
  }

  async function deleteProduct(id){
    await ensureAuth()
    await productDocRef(id).delete()
  }

  async function listProducts(){
    await ensureAuth()
    const snap = await db.collection('products').orderBy('createdAt', 'desc').get()
    return snap.docs.map(d => d.data())
  }

  function onProducts(callback){
    ensureAuth().finally(()=>{
      db.collection('products').orderBy('createdAt', 'desc').onSnapshot((snap)=>{
        const items = snap.docs.map(d => d.data())
        callback(items)
      })
    })
  }

  window.DB = { addOrUpdateProduct, deleteProduct, listProducts, onProducts }
  console.debug('[DB] Firebase DB initialized and window.DB exposed', window.DB)
})();
