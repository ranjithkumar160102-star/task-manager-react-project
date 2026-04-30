function addTask() {

    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    var list = document.getElementById("taskList");

    var li = document.createElement("li");
    li.innerText = task;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.onclick = function () {
        list.removeChild(li);
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
}