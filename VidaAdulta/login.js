


function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}


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