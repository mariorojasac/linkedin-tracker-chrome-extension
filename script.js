let myLeads = []

const inputEl = document.getElementById("input-el")
const inputELBtn = document.getElementById("input-btn")
const listEL = document.getElementById("list-el")

inputELBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

function renderLeads() {
  let listItems = ""

  for (let index = 0; index < myLeads.length; index++) {
    listItems += `<li><a href='${myLeads[index]}' target='_blank'>${myLeads[index]}</a></li>`;
  }

  listEL.innerHTML = listItems
}


