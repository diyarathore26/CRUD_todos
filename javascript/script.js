let inputContainer = document.querySelector(".input-container");
let todoBtn = document.querySelector(".todo-btn");
let allTodosText = document.querySelector(".all-todos-text");

//Read:Get
async function fetchTodos() {
  try {
    let request = await fetch("https://todos-ghp1.onrender.com/api/tasks");
    let response = await request.json();
    let data = response.data;
    totalTodos = data.length;

    displayTodos(data);
  } catch (error) {
    console.log(error);
  }
}
fetchTodos();

function displayTodos(todos) {
  if (!todos.length) {
    allTodosText.innerHTML = `<h1> PLEASE ADD TODO </h1>`;
    return;
  }

  allTodosText.innerHTML = todos
    .map(
      (el, index) =>
        `<div class="todo-card" id="${el.userId}" data-id="${el._id}">
           <div class="todo-details">
              <div class="todo-details">
                  <span class="todo-index">${index + 1}</span>
                 <h4 class="todo-title">${el.title}</h4>
              </div>
               <p class="todo-status ${el.status}">Status: ${el.status}</p>
       </div>
       
       <div class="todo-actions">

        <select class="statusSelect" onchange="updateTodoStatus('${
          el._id
        }',this.value)">
            <option value="To Do" ${
              el.status === "To Do" ? "selected" : ""
            }>To Do</option>
            <option value="In Progress" ${
              el.status === "In Progress" ? "selected" : ""
            }>In Progress</option>
            <option value="Done" ${
              el.status === "Done" ? "selected" : ""
            }>Done</option>
       </select>

       <button class="edit-btn" onclick="editTodo('${el._id}')">EDIT</button>
       <button class="delete-btn" onclick="deleteTodo('${
         el._id
       }')">DELETE</button>

       </div>
    </div>   `
    )
    .join("");
}

//create:post
async function addTodos() {
  let inputTodo = document.querySelector(".todo-text");
  let todoValue = inputTodo.value.trim();

  if (!todoValue) {
    alert("PLEASE ENTER A TODO");
    return;
  }
  try {
    await fetch("https://todos-ghp1.onrender.com/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todoValue,
        userId: totalTodos + 1,
      }),
    });
    fetchTodos();
    inputTodo.value = "";
  } catch (error) {
    console.log(error);
  }
}

//delete:delete
async function deleteTodo(id) {
  try {
    await fetch(`https://todos-ghp1.onrender.com/api/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTodos();
  } catch (error) {
    console.log("error");
  }
}

//Update:patch
async function updateTodoStatus(id, newStatus) {
  try {
    await fetch(`https://todos-ghp1.onrender.com/api/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    fetchTodos();
  } catch (error) {
    console.log("error");
  }
}

let currentEditId = null;
function editTodo(id) {
  currentEditId = id;

  let todoCard = document.querySelector(`.todo-card[data-id="${id}"]`);
  let existingTitle = todoCard.querySelector(".todo-title").textContent;

  let inputBox = document.querySelector(".edit-input");
  inputBox.value = existingTitle;

  document.querySelector(".edit-modal").style.display = "flex";
}

document.querySelector(".save-edit-btn").addEventListener("click", async () => {
  let newTitle = document.querySelector(".edit-input").value.trim();
  if (!newTitle) {
    alert("Please enter a valid title");
    return;
  }

  try {
    await fetch(`https://todos-ghp1.onrender.com/api/tasks/${currentEditId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    });
    document.querySelector(".edit-modal").style.display = "none";
    document.querySelector(".edit-input").value = "";
    fetchTodos();
  } catch (error) {
    console.log(error);
  }
});

document.querySelector(".cancel-edit-btn").addEventListener("click", () => {
  document.querySelector(".edit-modal").style.display = "none";
  document.querySelector(".edit-input").value = "";
});
