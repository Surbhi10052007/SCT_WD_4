let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

window.onload = function(){
    showTasks();
};

function addTask(){

    if(taskInput.value.trim() === ""){
        alert("Please enter a task");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(taskInput.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    showTasks();
}

function showTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskList.innerHTML = "";

    tasks.forEach((task,index) => {

        let li = document.createElement("li");

        li.innerHTML = `

        <span>${task}</span>

        <div class="task-buttons">

            <button style="background:#38b000;"
            onclick="completeTask(this)">✔</button>

            <button style="background:#ef233c;"
            onclick="removeTask(${index})">✖</button>

        </div>
        `;

        taskList.appendChild(li);
    });
}

function completeTask(button){

    let task = button.parentElement.parentElement.querySelector("span");

    task.style.textDecoration = "line-through";

    task.style.opacity = "0.6";
}

function removeTask(index){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
}