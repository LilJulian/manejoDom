let padre = document.querySelector('.container');
let node = document.createElement('h2');
node.textContent = "Titulo de segundo nivel";
let texto = document.createTextNode("Palabra para el modo de texto");

padre.appendChild(node);
padre.appendChild(texto);



let lista = document.querySelector('#list');
let elemento = document.createElement('ul');

let html = document.createElement('li');
let css = document.createElement('li');
let js = document.createElement('li');

html.classList.add('item');
css.classList.add('item');
js.classList.add('item');

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JS";

lista.append(html, css, js);

let card = document.querySelector('.card');
let lista_card = card.querySelector('#list');
let titulo = document.createElement('h2');
titulo.textContent = "Titulo de la card";
card.insertBefore(titulo, lista_card);

let beforebegin = document.createElement('li');
beforebegin.classList.add('item', 'before');
beforebegin.textContent = "holaa";

let afterbegin = document.createElement('li');
afterbegin.classList.add('item');
afterbegin.textContent = "nuevo contenido ubicado al inicio de la lista ordenada";

let beforend = document.createElement('li');
beforend.classList.add('item', 'before');
beforend.textContent = "Nuevo contenido ubicado al final de la lista ordenada";

let afterend = document.createElement('li');
afterend.classList.add('item');
afterend.textContent = "Nuevo contenido ubicado despues de la lista ordenada";


lista_card.insertAdjacentElement('beforebegin', beforebegin);
lista_card.insertAdjacentElement('beforeend', beforend);
lista_card.insertAdjacentElement('afterbegin', afterbegin);
lista_card.insertAdjacentElement('afterend', afterend);
// card.insertBefore(titulo);

let card_dias = document.querySelector('#dias');
const dias = [
  {
    id: 1,
    name: 'Lunes',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.'
  },
  {
    id: 2,
    name: 'Martes',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.'
  },
  {
    id: 3,
    name: 'Miercoles',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.'
  },
  {
    id: 4,
    name: 'Jueves',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.'
  },
  {
    id: 5,
    name: 'Viernes',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.'
  },
  {
    id: 6,
    name: 'Sabado',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.'
  },
  {
    id: 7,
    name: 'Domingo',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.'
  }
]

console.log(dias);

dias.map(({ name, img, paragraph }) => {
  //Creacion de los elementos
  let card = document.createElement('div');
  let card_header = document.createElement('div');
  let card_titulo = document.createElement('h2');
  let card_body = document.createElement('div');
  let image = document.createElement('img');
  let parrafo = document.createElement('p');
  //Agregar estilos y texto a los elementos
  card.classList.add('card');
  card_header.classList.add('card__header');
  card_titulo.classList.add('card__title');
  card_body.classList.add('card__body');
  card_titulo.textContent = name;
  image.classList.add('card__img');
  image.setAttribute('src', img);
  image.setAttribute('alt', name);
  parrafo.classList.add('card__paragraph');
  parrafo.textContent = paragraph;

  //Agregar los elementos a la card
  card_dias.append(card);
  card.append(card_header);
  card_header.append(card_titulo);
  card.append(card_body);
  card.append(image);
  card.append(parrafo);
})





