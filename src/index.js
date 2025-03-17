document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevents page reload
      
      const input = document.querySelector("#task").value;
      if (input.trim() === "") return; // Avoid empty tasks
      
      addTask(input);
      form.reset(); // Clears the input after submission
  });
});

function addTask(task) {
  const taskList = document.querySelector("#tasks");
  const taskItem = document.createElement("li");
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
}
addTask("Wash the dishes");


