//Declaring a variable saveEl,countEl and count
let saveEl = document.getElementById("save-el"),
let countEl = document.getElementById("count-el")
let count = 0
// Adding a fubnction to incrememt
function increment() {
    count += 1
    countEl.textContent = count
}
//Adding a function to Decrement 
function decrement() {
   count -=1;
   countEl.textContext = count
}
//Adding a function to save
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
//adding a time function
