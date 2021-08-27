const loadQuote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = (getData) => {
const quoteBlock = document.getElementById('quote-block');
quoteBlock.innerText = getData.quote;
}