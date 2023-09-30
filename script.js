const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
  <span class="text">${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-button done">Done</button>
    <button class="todo-button remove">Remove</button>
  </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
});

const learnMoreButton = document.getElementById("more");

learnMoreButton.addEventListener("click", function () {
  // Specify the URL of the website you want to open in a new tab/window
  const websiteURL =
    "https://www.ntaskmanager.com/blog/task-management-skills/"; // Replace with the desired website URL

  // Open the website in a new tab/window
  window.open(websiteURL, "_blank");
});
