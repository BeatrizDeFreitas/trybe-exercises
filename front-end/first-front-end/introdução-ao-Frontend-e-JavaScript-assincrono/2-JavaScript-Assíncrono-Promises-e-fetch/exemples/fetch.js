fetch("https://api.github.com/users/BeatrizDeFreitas")
    .then(response => response.json())
    .then(data => console.log(data));