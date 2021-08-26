window.addEventListener('load', () => {
  const title = document.getElementById('meme-title');
  const display = document.getElementById('meme-display');
  const button = document.getElementById('generate-button');
  button.addEventListener('click', getRandomQuote);
  function getRandomQuote() {
    fetch(`https://meme-api.herokuapp.com/gimme/formuladank`)
      .then((response) => response.json())
      .then((data) => {
        title.innerHTML = `${data.title}`;
        display.innerHTML = `<img src="${data.url}"/>`;
        console.log(data);
      });
  }
});
