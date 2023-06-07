// Obtém os elementos relevantes
const contentList = document.querySelector('.main-content-list');
const paginationButtons = document.querySelectorAll('.pagination-btn');

// Configuração inicial
const itemsPerPage = 5; // Número de itens por página
let currentPage = 1; // Página atual

// Função para exibir os itens corretos com base na página selecionada
function showItems() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Oculta todos os itens
  const allItems = contentList.children;
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].style.display = 'none';
  }

  // Exibe apenas os itens da página atual
  for (let i = startIndex; i < endIndex; i++) {
    if (allItems[i]) {
      allItems[i].style.display = 'block';
    }
  }
}

// Função para atualizar a página atual e mostrar os itens corretos
function changePage(pageNumber) {
  currentPage = pageNumber;
  showItems();
}

// Adiciona os ouvintes de evento aos botões de paginação
paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    changePage(index + 1);
  });
});

// Exibe a primeira página inicialmente
showItems();
