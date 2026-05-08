

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(saveEl)
console.log(countEl)

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    let entries = count + " - "
    saveEl.textContent += entries   //textContent hidden element
    console.log(count)

    countEl.innerText = 0  //makes the count again zero but registers from where left 
    count = 0 //makes the whole count 0 and starts from 1 again
}
