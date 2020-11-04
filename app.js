const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Evento de animação
container.addEventListener('mousemove', (e) => {
    let eixoX = (window.innerWidth / 2 - e.pageX) / 20;
    let eixoY = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${eixoX}deg) rotateX(${eixoY}deg)`;  
})

//Evento para quando o mouse sair do container, ele retornar a posição inicial
container.addEventListener('mouseleave', e => {
    card.style.transform = `rotateY(0) rotateX(0)`
})