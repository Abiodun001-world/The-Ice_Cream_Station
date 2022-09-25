//Declaring a variable saveEl,countEl and count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
//Adding a function to Increment
function increment() {
    count += 1
    countEl.textContent = count
}
//Ading a function to save
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
