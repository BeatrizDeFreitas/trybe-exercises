// Criando uma Promise para carregar dados
const loadData = new Promise((resolve, reject) => {
  // Simulando um atraso de 2 segundos (para simular a busca de dados)
  setTimeout(() => {
    // Suponha que os dados foram buscados com sucesso
    const data = ['item1', 'item2', 'item3'];
    resolve(data); // Resolvendo a Promise com os dados
  }, 1000); // Tempo em milissegundos
});

// Usando a Promise
loadData
  .then((data) => {
    console.log('Primeiros Dados carregados:', data);
  })
  .catch((error) => {
    console.error('Erro ao carregar dados:', error);
  });
