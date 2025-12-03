;(function(){
  if (!window.firebase || !firebase.auth) {
    console.warn('[Auth] Firebase Auth SDK not found. Load firebase-auth-compat.js before auth.js')
    return
  }
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  function signIn(){ return auth.signInWithPopup(provider).catch(e => {
    console.error('[Auth] Sign-in failed', e); alert('Google sign-in failed')
  })}
  function signOut(){ return auth.signOut().catch(e => {
    console.error('[Auth] Sign-out failed', e)
  })}

  function injectButton(user){
    const container = document.querySelector('.header .header-actions') || document.body
    let btn = document.getElementById('googleAuthBtn')
    if(!btn){
      btn = document.createElement('button')
      btn.id = 'googleAuthBtn'
      btn.className = 'btn btn-outline'
      btn.style.marginLeft = '0.5rem'
      container && container.appendChild(btn)
    }
    if (user){
      btn.textContent = 'Sign out'
      btn.onclick = signOut
    } else {
      btn.textContent = 'Sign in with Google'
      btn.onclick = signIn
    }
  }

  auth.onAuthStateChanged((user)=>{
    window.Auth = { user, signIn, signOut }
    injectButton(user)
    window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user } }))
  })

  window.Auth = { user: auth.currentUser, signIn, signOut }
})();