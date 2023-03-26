const main = document.querySelector("#main-content")
console.log(main)

const taskform = document.querySelector("#create-task-form")
const tasklist = document. querySelector("#tasks")

taskform .addEventListener("submit",function (e) {
  e.preventDefault();


const newtask = document.querySelector("#new-task-description").value


tasklist.innerHTML += `
<li> ${newtask}
<button data-action="delete" data-mata="powerful"data-charlie="downfield">x</button>
</li>
`
taskform.reset()
})
 tasklist.addEventListener("click" , function (e) {
  console.log(e.target)
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
  })