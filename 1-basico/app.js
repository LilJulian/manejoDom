let win = window;
let doc = document;
let header = document.querySelectorAll('header h1');
let main = document.querySelectorAll('main p')
let lista = document.querySelectorAll('ul.list > li.item');
let card = document.querySelectorAll('div.cards > div.card');
let cards = document.querySelector('div.cards');
console.log(cards);

// console.log(Array.from(header));

let images = document.images;
let scripts = document.scripts
let estilos = document.styleSheets
// let lista = document.querySelector('ul');

console.log(card);

// console.log(lista);
// console.log(estilos);
// console.log(images);
// console.log(scripts);


// console.log(Array.from(main));

console.clear();
// let elemento = document.querySelector('#elementos2');
// elemento.textContent = "Nuevo texto";
// elemento.innerHTML = `<p> textos </p> <p> texto</p>`;



setTimeout(() => {
  let body = document.querySelector('body');
  body.classList.add('bg-red')
  console.log(classList);
}, 2000);

setTimeout(() => {
  let body = document.querySelector('body');
  body.classList.add('bg-dark')
  console.log(classList);
}, 2000);

