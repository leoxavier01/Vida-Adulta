
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

function acceptCookies() {
    // Aqui você pode implementar a lógica para aceitar os cookies
    document.getElementById('cookieBanner').style.display = 'none';
  }

  function rejectCookies() {
    // Aqui você pode implementar a lógica para recusar os cookies
    document.getElementById('cookieBanner').style.display = 'none';
  }