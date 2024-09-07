
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

  
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.testimonial-container');
    const items = document.querySelectorAll('.testimonial-item');
    const indicators = document.querySelectorAll('.indicator');
    const itemCount = items.length;
    const itemWidth = items[0].offsetWidth;
    let currentIndex = 0;
    let interval;

    function moveToIndex(index) {
        if (index >= itemCount) {
            index = 0;
        } else if (index < 0) {
            index = itemCount - 1;
        }
        container.style.transform = `translateX(-${itemWidth * index}px)`;
        updateIndicators(index);
        currentIndex = index;
    }

    function moveNext() {
        moveToIndex(currentIndex + 1);
    }

    function movePrev() {
        moveToIndex(currentIndex - 1);
    }

    function updateIndicators(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function startCarousel() {
        interval = setInterval(moveNext, 3000); // Move every 3 seconds
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    document.querySelector('.next').addEventListener('click', function() {
        moveNext();
        stopCarousel(); // Optional: Stop auto-rotation on user interaction
    });

    document.querySelector('.prev').addEventListener('click', function() {
        movePrev();
        stopCarousel(); // Optional: Stop auto-rotation on user interaction
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            moveToIndex(index);
            stopCarousel(); // Optional: Stop auto-rotation on user interaction
        });
    });

    startCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
    let likeCount = 0;
    let dislikeCount = 0;
  
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');




    // Incrementa o número de likes a cada clique
    likeBtn.addEventListener('click', () => {
      likeCount++;
      document.getElementById('like-count').textContent = likeCount;
    });
    // Incrementa o número de dislikes a cada clique
    dislikeBtn.addEventListener('click', () => {
      dislikeCount++;
      document.getElementById('dislike-count').textContent = dislikeCount;
    });
    
  });
  


  
