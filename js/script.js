const form = document.getElementById("todolist");
const inputTugas = document.getElementById("tugasin");
const inputTanggal = document.getElementById("tanggalin");
const taskList = document.getElementById("task-list");
const deleteAll = document.getElementById("delete-all");
const filterSelect = document.getElementById("filter-select");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const tugas = inputTugas.value;
  const tanggal = inputTanggal.value;

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.setAttribute("data-selesai", "false");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    taskItem.setAttribute("data-selesai", checkbox.checked ? "true" : "false");
    applyFilter(); 
  });

  const spanTugas = document.createElement("span");
  spanTugas.textContent = tugas;

  const spanTanggal = document.createElement("span");
  spanTanggal.textContent = tanggal;

  taskItem.appendChild(checkbox);
  taskItem.appendChild(spanTugas);
  taskItem.appendChild(spanTanggal);

  taskList.appendChild(taskItem);
  form.reset();
  applyFilter();
});

deleteAll.addEventListener("click", function () {
  taskList.innerHTML = "";
});

filterSelect.addEventListener("change", applyFilter);

function applyFilter() {
  const filter = filterSelect.value;
  const tasks = document.querySelectorAll(".task-item");

  tasks.forEach(task => {
    const isDone = task.getAttribute("data-selesai") === "true";

    if (filter === "all") {
      task.style.display = "flex";
    } else if (filter === "done") {
      task.style.display = isDone ? "flex" : "none";
    } else if (filter === "undone") {
      task.style.display = !isDone ? "flex" : "none";
    }
  });
}
