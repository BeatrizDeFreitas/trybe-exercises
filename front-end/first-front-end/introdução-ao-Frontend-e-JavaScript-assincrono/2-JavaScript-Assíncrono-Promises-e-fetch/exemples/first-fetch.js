fetch("https://api.github.com/users/BeatrizDeFreitas")
  .then(response => response.json())  // Aqui estamos convertendo o corpo da resposta para um objeto JSON
  .then(data => console.log(data));    // Aqui estamos imprimindo o objeto JavaScript resultante (representando os dados JSON) no console

