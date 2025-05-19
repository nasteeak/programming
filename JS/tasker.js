const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task");
console.log(tasks);

/*добавление новой задачи */
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault();//отменяем действие браузера по умолчанию - перезагрузку страницы
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>
                <i tabindex="0" class="bi bi-pencil-fill btn-edit"></i>
                <i tabindex="0" class="bi bi-trash3-fill btn-remove"></i>`;
    container.append(newTask);


    console.log(tasks);
});

// /*--------удаление и редактирование---------*/
container.addEventListener("click", (event)=>{
    const btn = event.target; // элемент по которому кликнул пользователь
    if(btn.classList.contains("btn-remove")){
        btn.closest(".task").outerHTML = ""
    }
    if(btn.classList.contains("btn-edit")){
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true");
    }
    tasks = document.querySelectorAll(".task");
});

// // /*-----------------*/
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     let tasks = document.querySelectorAll(".task"); //nodelist
    
  
//     for(let task of tasks){
//         // if(task.classList.contains("importent")){
//         //     task.classList.remove("importent")
//         // }
//         // else {
//         //     task.classList.add("importent")
//         // }
//         task.classList.toggle("importent");
//      }
// })

const btn1 = document.getElementById("btn1");
function compare(a, b){
    if(a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    if(a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if(a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}
btn1.addEventListener("click", function(){
    let newTasks = [].slice.call(tasks).sort(compare);
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i]);
    }
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function() {
    let newTasks = [].slice.call(tasks).sort(compare).reverse();
    container.innerHTML = "";
    for (let i in newTasks) {
        container.appendChild(newTasks[i]);
      }
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function() {
    let newTasks = [...tasks];
    newTasks = newTasks.filter(task => task.classList.contains("importent"));
    container.innerHTML = "";
    for (let task of newTasks){
        container.append(task);
    }
});

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click",function(){
    let newTasks = [...tasks];
    let value = document.getElementById("taskInput").value.toLowerCase().trim();
    newTasks = newTasks.filter(function(item){
        return item.innerHTML.toLowerCase().indexOf(value) != -1;
    });
    container.innerHTML = "";
    newTasks.forEach(function(task) {
        container.appendChild(task);
    });
});

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
    let newTasks = [...tasks];
    container.innerHTML = "";
    newTasks.forEach(function(task){
        container.appendChild(task);
    })
});

// BigInt64Array.addEventListener("click", function(){
//     let value = 
//     newTasks = newTasks.filter(function(item){
//         return item.innerHTML.indexOf(value) != -1;
//     });
// })

// function myMax(){
//     let max = arguments[0] || 0;
//     for (let i = 1; i < arguments.length; i++)
//     if (arguments[i] > max){
//         max = arguments[i];
//     }
//     return max;
// }
// console.log(myMax(53, 5, -70, 6));


