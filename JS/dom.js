/* 1. Выбор элементов на странице 
   1.1 Выбор по id */
const h1 = document.getElementById("title");
console.log(h1);
/* Выбор олного элемнта по селектору */
const menu = document.querySelector(".menu");
console.log(menu)
/* Выбор нескольких элементов по селектору */
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs)