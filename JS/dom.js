/* 1. Выбор элементов на странице 
   1.1 Выбор по id */
const h1 = document.getElementById("title");
console.log(h1);
/* 1.2 Выбор олного элемнта по селектору */
const menu = document.querySelector(".menu");
console.log(menu)
/* 1.3 Выбор нескольких элементов по селектору */
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs)

/* 2. Прочитать или изменить содержимое тега */
 console.log(h1.textContent);
 console.log(h1.innerHTML);
 console.log(h1.outerHTML);
 console.log(h1.innerText);
 console.log(h1.outerText);

 h1.textContent = 'Новый заголовок <i class="bi bi-suit-club"></i>';
 h1.innerHTML = 'Новый заголовок <i class="bi bi-suit-club"></i>';

 /* 3. Работа со стилями (атрибут style) */
 h1.style.color = "grey";
 h1.style.fontSize = "48px";
 console.log(h1.style);

 /* 4. Работа с классами (атрибут class) */
 menu.classList.add("border");
 const h2 = document.querySelector(".blue");
 h2.classList.remove("blue");
 console.log(menu.classList.contains("border"));

 /* 5. Работа с атрибутами */
 const firstLink = document.querySelector(".menu li:first-child a");
 console.log(firstLink.getAttribute("href")); // узнать значение атрибута
 firstLink.setAttribute("href", "https://midis.ru/");
 firstLink.setAttribute("target", "_blank");
 firstLink.removeAttribute("target"); //удалить атрибут

 /* 6. Создание нового тега */
 const image = document.createElement("img");
 image.setAttribute("src", "img/1.jpg");
 image.classList.add("border");
 const block = document.getElementById("block");
 block.classList.add("border");
 block.prepend(image);

 /* 7. Работа с предками */
 console.log(firstLink.closest("li"));

/* 8. Работа с потомками */
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"));

/* 9. События */
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click", function(){
   circle.style.background = "red";
});
