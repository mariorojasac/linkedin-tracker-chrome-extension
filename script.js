let myLeads = []

const inputEl = document.getElementById("input-el")
const inputELBtn = document.getElementById("input-btn")
const listEL = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("saveTab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads(myLeads)
}

saveTabBtn.addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
  })
})

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  renderLeads(myLeads)
})

inputELBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads(myLeads)
})

function renderLeads(leads) {
  let listItems = ""
  for (let index = 0; index < leads.length; index++) {
    listItems += `<li><a href='${leads[index]}' target='_blank'>${leads[index]}</a></li>`;
  }
  listEL.innerHTML = listItems
}

console.log(localStorage.getItem("myLeads"))
