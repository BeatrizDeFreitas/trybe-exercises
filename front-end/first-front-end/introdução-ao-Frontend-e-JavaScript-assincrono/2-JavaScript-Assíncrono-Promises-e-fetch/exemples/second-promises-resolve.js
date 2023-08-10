// Função para carregar dados
const loadSomeData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = ['item1', 'item2', 'item3'];
        resolve(data);
      }, 1000);
    });
  };
  
  // Função para processar os dados carregados
  const processData = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.map(item => item.toUpperCase());
        resolve(processedData);
      }, 2000);
    });
  };
  
  // Encadeando as Promises
  loadSomeData()
    .then(data => {
      console.log('Dados carregados:', data);
      return processData(data);
    })
    .then(processedData => {
      console.log('Dados processados:', processedData);
    })
    .catch(error => {
      console.error('Erro:', error);
    });