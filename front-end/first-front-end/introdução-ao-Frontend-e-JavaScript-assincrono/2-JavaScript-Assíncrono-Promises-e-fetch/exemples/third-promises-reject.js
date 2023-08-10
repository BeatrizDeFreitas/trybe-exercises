// Simulando uma função para buscar um usuário em um servidor
const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
      // Simulando um erro se o ID do usuário for negativo
      if (userId < 0) {
        reject('ID de usuário inválido'); // Rejeitando a Promise com uma mensagem de erro
      } else {
        // Simulando o sucesso com um atraso de 2 segundos
        setTimeout(() => {
          const user = { id: userId, name: 'John Doe' };
          resolve(user); // Resolvendo a Promise com o usuário
        }, 2000);
      }
    });
  };
  
  // Usando a Promise com o reject
  fetchUser(1000)
    .then(user => {
      console.log('Usuário encontrado:', user);
    })
    .catch(error => {
      console.error('Erro ao buscar usuário:', error);
    });
  
  // Tentando buscar um usuário com um ID inválido (negativo)
  fetchUser(-1)
    .then(user => {
      console.log('Usuário encontrado:', user);
    })
    .catch(error => {
      console.error('Erro ao buscar usuário:', error);
    });
  