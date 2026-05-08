//>
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
//file index_1.html
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
let come = document.getElementById("comeback")
let welcomeEl = document.getElementById("welcome-el")

let back = "Welcome Back Again"
let name = "Rishika"
let greeting = "Good Afternoon"

// Add an emoji to the end! 👋 
come.innerText = back + " 👋"

// Add an emoji to the end! 👋 do not modify exisiting code
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
welcomeEl.innerText = greeting +" " + name + " !"
welcomeEl.innerText = welcomeEl.innerText + "🪄"
