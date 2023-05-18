const todoForm = document.getElementById('todoForm')

todoForm.addEventListener('submit', e => {
    e.preventDefault()
    displayEntries(getEntry())
    todoForm.reset()
})

function getEntry() {
    const newEntry = {}
    newEntry.entryTitle = document.getElementById('todoTitle').value
    newEntry.entryBody = document.getElementById('todoBody').value
    newEntry.active = true
    return newEntry
}

function displayEntries({ entryTitle, entryBody }) {
    const outer_div = document.createElement('div')
    outer_div.classList.add("card", "text-bg-dark", "mb-3", "card_style")
    const mid_div = document.createElement('div')
    mid_div.className = "card-header"
    mid_div.innerHTML = "To-do Entry"
    const close_button = document.createElement('button')
    close_button.classList.add("btn-close", "text-right")
    const inner_div = document.createElement('div')
    inner_div.className = "card-body"
    const h5 = document.createElement('h5')
    h5.className = "card-title"
    const p = document.createElement('p')
    p.className = "card-text"
    h5.innerHTML = `${entryTitle}`
    p.innerHTML = `${entryBody}`
    mid_div.append(close_button)
    inner_div.append(h5, p)
    outer_div.append(mid_div, inner_div)
    document.getElementById('todoContainer').appendChild(outer_div)
    close_button.addEventListener('click', () => outer_div.remove())
}