const containerMenu = document.querySelector('.container-menu');
const btnExpandir = document.querySelector('.menu-icone-expandir');
const txtLink = document.querySelectorAll('.txt-link');
const secao = document.querySelectorAll('.secao');
const listaDeItemMenu = document.querySelectorAll('.lista-item');

// Expande o menu lateral
btnExpandir.addEventListener('click', () => {
    containerMenu.classList.toggle('expandido');
    txtLink.forEach(link => {
        link.classList.toggle('show');
    });

    btnExpandir.classList.toggle('invertido-vertical');
});
