/* Nodos info desde html*/ 
const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const error = document.querySelector(".error");
const pending = document.querySelector("span");

/* al guardar las tasks en el localstorage(setltem) las tenemos como string y esta feo, necesitamos pasarlas a array*/
/*aqui en vez de split podriamos JSON parse, cambiar setitem del doc por JSon.stringify?¿?¿movidas de momento chill*/
function getInitialTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return storedTasks.split(",");
  }
  return [];
}
/*recibe titulo de la lista, recibe un li, adjunta un item desde list*/

function createItem(title) {
  const item = document.createElement("li");
  item.innerText = title;
  list.append(item);
}
/* function con contenido vacio xq queremos limpiar el input cada vez q se pulse button
para que focus?¿*/

function clearInput() {
  input.value = "";
  input.focus();
}
/* mostrar mensaje de error cnd se produce, message es .error?¿*/
function setError(message) {
  error.innerText = message;
}
/* function vacia para limpiar el error después de mostrarlo*/
function clearError() {
  error.innerText = "";
}
/*function para guardad tasks en el cliente storage*/
function saveTask(title) {
  tasks.push(title);
  localStorage.setItem("tasks", tasks);
}
/* contador de tareas, linkeado con el ul y actualizado cuando se eliminan tareas*/
function updatePendingTasks() {
  pending.innerText = tasks.length;
}
/* aqui no me entero muy bien que sucede, entiendo que se necesitan filtrar los li para borrarlos?¿*/
function removeItem(item) {
  list.removeChild(item);
  const items = document.querySelectorAll("li");
  const newTasks = [];
  items.forEach((item) => newTasks.push(item.innerText));
  tasks = newTasks;
  localStorage.setItem("tasks", tasks);
}
/* Intenta saber qué está pasando a partir de aquí, control de funciones presentadas anteriormente:) */

let tasks = getInitialTasks();

tasks.forEach(createItem);

updatePendingTasks();

/* submit implica que si hay un valor sucede lo de dentro del IF, si no hay valor sudece lo de ELSE*/
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    createItem(input.value);
    saveTask(input.value);
    clearInput();
    clearError();
    updatePendingTasks();
  } else {
    setError("Task is empty");
  }
});

/* flujo de limpieza de message de error cuando escribes, pero no cnd clickas como las demás tareas*/
/* si f5 no mantiene error xq no está setItem en local storage?*/
input.addEventListener("input" ,() => {
 if (input.value){
  clearError();}
  else{
    setError("Task is empty")
  }
});
 /* borrar tareas mediante clickar en cualquier lugar de la screen*/
list.addEventListener("click", (event) => {
  removeItem(event.target);
  updatePendingTasks();
});
;
