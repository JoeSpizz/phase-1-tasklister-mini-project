document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
   form.addEventListener('submit', (e) => {
    e.preventDefault()
    runToDoEvent(e.target["new-task-description"].value)
  }
  )

});

function runToDoEvent(toDo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', toDoDelete)
  p.textContent = `${toDo} `;
  p.style.color = "Blue"
  p.style.fontFamily = "Courier New";

  btn.textContent = "DONE";
  p.appendChild(btn)
    document.querySelector("#tasks").appendChild(p);
  
}

function toDoDelete (e) {
  e.target.parentElement.remove()
}