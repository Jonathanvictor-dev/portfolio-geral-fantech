const containerMenu = document.querySelector('.container-menu');
const btnExpandir = document.querySelector('.menu-icone-expandir');
const txtLink = document.querySelectorAll('.txt-link');
const secao = document.querySelectorAll('.secao');
const listaDeItemMenu = document.querySelectorAll('.lista-item');
const ListaDecontainersDetalhes = document.querySelectorAll('.container-detalhes');

// Expande o menu lateral
btnExpandir.addEventListener('click', () => {
    containerMenu.classList.toggle('expandido');
    txtLink.forEach(link => {
        link.classList.toggle('show');
    });

    btnExpandir.classList.toggle('invertido-vertical');
});

// Faz a inclusão de opacidade nos elementos que não foram clicados na lista de detalhes.
ListaDecontainersDetalhes.forEach(container => {
    container.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        ListaDecontainersDetalhes.forEach(item => {
            item.classList.add('container-detalhes-opacidade');
        });
        container.classList.remove('container-detalhes-opacidade');
    });
});

//
document.addEventListener('click', () => {
    ListaDecontainersDetalhes.forEach(item => {
        item.classList.remove('container-detalhes-opacidade');
    });
});