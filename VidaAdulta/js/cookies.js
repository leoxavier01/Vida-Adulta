var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}