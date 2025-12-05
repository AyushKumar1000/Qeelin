;
(function(){
  // Firebase Auth removed - providing stub interface
  function signIn(){ 
    console.log('[Auth] Sign-in functionality removed')
    return Promise.resolve(null)
  }
  function signOut(){ 
    console.log('[Auth] Sign-out functionality removed')
    return Promise.resolve()
  }

  function injectButton(user){
    const container = document.querySelector('.header .header-actions') || document.body
    let btn = document.getElementById('googleAuthBtn')
    if(!btn){
      btn = document.createElement('button')
      btn.id = 'googleAuthBtn'
      btn.className = 'btn btn-outline'
      btn.style.marginLeft = '0.5rem'
      btn.style.display = 'none' // Hide the auth button
      container && container.appendChild(btn)
    }
  }

  // Initialize with no user
  window.Auth = { user: null, signIn, signOut }
  injectButton(null)
  window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user: null } }))
})();