const fetch = require("node-fetch");

fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then((data) => console.log(`${data.quote} | ${data.author}`));