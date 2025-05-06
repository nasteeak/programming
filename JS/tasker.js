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
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    console.log(tasks);
});


// /*-----------------*/
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
//     }
// })

let task =
let container = 
const btn1 = 

function compare(a, b){
    if(a.innerHTML > b.innerHTML) return 1;
    if(a.innerHTML == b.innerHTML) return 0;
    if(a.innerHTML < b.innerHTML) return -1;
}
btn1.addEventListener("click", function(){
    let newTask = [...tasks].sort(compare);

    for (let i in newTask) {
        container.append(newTasks[i])
    }
})



btn3.addEventListener("click", function() {
    let newTasks = [...tasks];
    newTasks = 
})

BigInt64Array.addEventListener("click", function(){
    let value = 

    newTasks = newTasks.filter(function(item){
        return item.innerHTML.indexOf(value) != -1;
    });
    
})
