const card = document.querySelector('.card');
const container = document.querySelector('.container');

const nomeTenis = document.querySelector('.nomeTenis');
const tenis = document.querySelector('.tenis img');
const comprar = document.querySelector('.comprar button');
const descricao = document.querySelector('.descricao h3');
const tamanhos = document.querySelector('.tamanhos')

document.getElementById("btn42").focus();

//Evento de animação
container.addEventListener('mousemove', (e) => {
    let eixoX = (window.innerWidth / 2 - e.pageX) / 20;
    let eixoY = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${eixoX}deg) rotateX(${eixoY}deg)`;  
})

//Evento para quando o mouse entrar no container
container.addEventListener('mouseenter', e => {
    card.style.transition = 'all 0.1s ease';
    
    //popup para o nome do tenis
    nomeTenis.style.transition = 'all 0.5s ease';
    nomeTenis.style.transform = 'translateZ(120px)';

    //popup para o imagem do tenis
    tenis.style.transition = 'all 0.5s ease';
    tenis.style.transform = 'translateZ(120px)';

    //popup para o botão de compra
    comprar.style.transition = 'all 0.5s ease';
    comprar.style.transform = 'translateZ(120px)';

    //popup para a descricao
    descricao.style.transition = 'all 0.5s ease';
    descricao.style.transform = 'translateZ(120px)';

    //popup para a descricao
    tamanhos.style.transition = 'all 0.5s ease';
    tamanhos.style.transform = 'translateZ(120px)';
})

//Evento para quando o mouse sair do container, ele retornar a posição inicial
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease'; //deixa mais suave a transição de animação
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //retorna o nome do tenis para a posição inicial
    nomeTenis.style.transition = 'all 0.5s ease';
    nomeTenis.style.transform = 'translateZ(0px)';

    //retorna a imagem do tenis para a posição inicial
    tenis.style.transition = 'all 0.5s ease';
    tenis.style.transform = 'translateZ(0px)';

    //retorna o botão de comprar para a posição inicial
    comprar.style.transition = 'all 0.5s ease'
    comprar.style.transform = 'translateZ(0px)';

    //retorna a descricao para a posição inicial
    descricao.style.transition = 'all 0.5s ease'
    descricao.style.transform = 'translateZ(0px)';

    //popup para a descricao
    tamanhos.style.transition = 'all 0.5s ease';
    tamanhos.style.transform = 'translateZ(0px)';
})
