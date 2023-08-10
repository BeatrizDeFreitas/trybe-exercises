const quoteBtn = document.querySelector('.get-quote');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const errorText = document.querySelector('.error');
const API_URL = 'https://dummyjson.com/quotes/random';

quoteBtn.addEventListener('click', async () => {
    // fetch(API_URL)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         quoteText.innerHTML = data.quote;
    //         authorText.innerHTML = data.author;
    //         errorText.innerHTML = '';
    //     })
    //     .catch((error) => {
    //         quoteText.innerHTML = '';
    //         authorText.innerHTML = '';
    //         errorText.innerHTML = `Error: ${error}`;
    //     });
    
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        quoteText.innerHTML = data.quote;
        authorText.innerHTML = data.author;
        errorText.innerHTML = '';
    } catch (error) {
        quoteText.innerHTML = '';
        authorText.innerHTML = '';
        errorText.innerHTML = `Error: ${error}`;
    }
});