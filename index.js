//variable and console

//>Variable assigning assignment problem
// let age = 21
// console.log(age)

// let count = 5-7
// let count1 = 5+7
// console.log(count)
// console.log(count1)

// let firstBatch = 10
// let secondBatch = 20
// let count = firstBatch + secondBatch
// console.log(count)


// 1. Create two variables, myAge and humanDogRa tio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
// let humanAge = 21
// let HumanDogRatio = 7
// myDogAge = humanAge *  HumanDogRatio
// console.log(myDogAge)

//--------------------------------------------------------------------------------//

//> Assignment along with incremnet problem

// let count = 10
// count = 2
// console.log(count)

// let count = 10
// count = count + 10  //>increment f as javascript goes from up to down
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

/*
let bonuspoint = 50
console.log(bonuspoint)

incre = bonuspoint + 50
console.log(incre)

incre = incre - 75
console.log(incre)

incre = incre + 45
console.log(incre)
*/

//--------------------------------------------//

//>create function for button

// function increment(){
//     console.log("The button is clicked.");
// }

// //setting up the race
// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// //go
// //players running the race
// //race is finished

// //get ready for the new race

// countdown()

//----------------------------------------------------------------------------//

// //>Create a function (you decide the name) that logs out the number 42 to the console
// //Call/invoke the function

// function number(){
//     console.log(42)
// }

// number()


// //>Create a function and calculate total laps time 

// let lap1 = 20;
// let lap2 = 20;
// let lap3 = 10;


// function laptime(){
//     let total = lap1 + lap2 + lap3;
//     console.log(total)
// }

// laptime()

// //>
// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// let lapcompleted = 0

// function incrementslap(){
//     lapcompleted = lapcompleted + 1
//     console.log(lapcompleted) //runs while adding each loop shows each time when function executes => 1 2 3
// }

// incrementslap()
// incrementslap()
// incrementslap()

// console.log(lapcompleted) //runs and shows how many times function acts shows direct final answer => 3

//>
// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

/*intialize the count as 0
listen for clicks on the increment button
increment the count variable when the button is clicked
change the count-el in the HTML to reflect the new count
*/
//camelCase when 1st letter of second word is big
// let countEl = document.getElementById("count-el")
// console.log(countEl) //prints the html tag with id 

// let count = 0

// function increment(){
//     count += 1
//     countEl.innerText = count 
//     console.log(count)
//     //console.log("clicked")
// }

//>
// 1. Create a function, save(), which logs out the count when it's called

// function save(){
//     console.log(count)
// }
// save()

//>about string
//> Create a variable, message, that stores the string: "You have tree new notifications"
// let username = "Jerry"
// let message = "You have three new notification."
// console.log(message + "," + username + "!")

//------------------------------------------------------------------------------------------------------------------//
//29/04/26 Wednesday

//>Create a variable, messageToUser, that contains the message we have logged
// let user = "Edin"
// let message1 = "You storage is full"

// let messageToUser = message1 + ","  + user + "."
// console.log(message1 + "," + user + "!")
// console.log(messageToUser)

//>
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// // Create a third variable, myGreeting, that contatenates the two strings
// // Log myGreeting to the console

// let name = "Rishika"
// let greeting = "Hi,my name is"

// let myGreeting = greeting + " " +"'" + name + "'" + "!"
// //console.log(myGreeting)

// let name1 = 42
// let msg = "Hi,my name is "

// let concat = msg + name1 
// console.log(concat)
// console.log(4 + 7)
// console.log("4"+"12")
// console.log("3"+6)
// console.log(6+"8")  

//-----------------------------------------------------------------------------------------------------------------//

//06/05/26 Wednesday 


//>
//>
// 1. Grab the save-el paragrah and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph



// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// console.log(saveEl)
// console.log(countEl)

// let count = 0

// function increment(){
//     count += 1
//     countEl.innerText = count
//     console.log(count)
// }

// function save(){
//     let entries = count + " - "
//     saveEl.textContent += entries   //textContent hidden element
//     console.log(count)
// }

//--------------------------------------------------------------------------------------------------------------------//

//07/05/26 Thursday
//once hit button clicked the number should return to zero

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