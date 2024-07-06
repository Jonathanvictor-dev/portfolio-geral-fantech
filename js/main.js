const containerMenu = document.querySelector('.container-menu');
const btnExpandir = document.querySelector('.menu-icone-expandir');
const txtLink = document.querySelectorAll('.txt-link');
const ListaDecontainersDetalhes = document.querySelectorAll('.container-detalhes');

// Expande o menu lateral
btnExpandir.addEventListener('click', () => {
    containerMenu.classList.toggle('expandido');
    txtLink.forEach(link => {
        link.classList.toggle('show');
    });

    btnExpandir.classList.toggle('invertido-vertical');
});

// Ativa o menu correspondente com a seção da página
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('.lista-item');

    function setActiveLink() {
        let index = sections.length;

        // Verifica a posição da rolagem para definir o índice correto
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        // Remove a classe 'ativo' e o estilo de todos os itens do menu
        menuItems.forEach((item) => {
            item.classList.remove('ativo');
            item.querySelector('.lista-item-link').style.color = ''; // Remove o estilo do link
        });

        // Garante que o índice está dentro do intervalo
        if (index >= 0 && index < menuItems.length) {
            menuItems[index].classList.add('ativo');
            menuItems[index].querySelector('.lista-item-link').style.color = '#202020'; // Adiciona o estilo ao link ativo
        };
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});


// Faz a inclusão de opacidade nos elementos que não foram clicados na lista de detalhes
ListaDecontainersDetalhes.forEach(container => {
    container.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        ListaDecontainersDetalhes.forEach(item => {
            item.classList.toggle('container-detalhes-opacidade');
        });
        container.classList.remove('container-detalhes-opacidade');
    });
});

// Ao clicar em qualquer parte do body, a classe de opacidade é retirada
document.addEventListener('click', () => {
    ListaDecontainersDetalhes.forEach(item => {
        item.classList.remove('container-detalhes-opacidade');
    });
});

