// chapter 20 to 23

// Q1


// let firstName = prompt("Enter your First Name")
// let lastName = prompt("Enter your Last Name")
// let fullName = firstName + " " + lastName
// console.log(fullName)
// alert("Assalamualikum User")


// Q2 


// let userPhone = prompt("Enter Your Favaourite Mobile")
// for (let i = 1; i<=userPhone.length ; i++) {
//     document.writeln("My favaourite Mobile is",userPhone,"<br>","The length is", userPhone.length)
//     break;
// }



// Q3


// let pk = "Pakistani"
// console.log(pk.indexOf("n"))
// console.log(pk)

// Q4



// let pk = "Hello World"
// console.log(pk.lastIndexOf("l"))
// console.log(pk)



// Q5 

// let pk = "Pakistan"
// document.writeln("String:" , pk,"<br>")
// for ( let i=1; i<=pk.length ; i++) {
//     document.writeln("Character at index 3:", pk[3])
//     break;
// }


// Q6

// let firstName = "Asad";
// let lastName = "Raza";

// let fullName = firstName.concat(" ", lastName);
// console.log(fullName)


//  Q7
//  let city = "Hyderabad"
//  console.log(city.replace("Hyder","Islam"))



// Q8 

// let message = "Ali and Sami are the best friends and they play cricket and fotball together."
// let newMessage = message.replace(/and/g, "&")
// console.log("New Message:", newMessage)


// Q9


// let str = "472"
// let num = Number(str)
// console.log("Value:", str)
// console.log("Value:",  typeof str)
// console.log("Value:", num)
// console.log("Value:",  typeof num)

// Q10



// let userInput = prompt("Enter any word")
// let upperCase = userInput.toUpperCase()
// console.log("User Input:", userInput)
// console.log("Upper Case:", upperCase)


// Q11

// let userInput = prompt("Enter any word")
// let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLocaleLowerCase()
// console.log("User Input:", userInput)
// console.log("Title Case:", titleCase)

// Q12

// let num = 45.56
// let numString = num.toString()
// let removeDot = numString.replace(".","")
// console.log("Number:", num)
// console.log("Result:", removeDot)

// Q13


// let userName = prompt("Enter your name")
// for (let i= 0 ; i<userName.length; i++) {
//     if (userName[i]=== "@" || userName[i] === "." || userName[i] === "!") {
//         alert("Please enter a valid username")
//         break;
//     }
//     else(console.log("Valid username"))
// }

// Q14


// let arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// let lowerCaseInput = userInput.toLocaleLowerCase()
// let found = false;
// for (let i = 0; i <arr.length; i++) {
//     if (arr[i]=== lowerCaseInput) {
//         found = true;
//         alert(lowerCaseInput + "is available at index " + i + "in our bakery")
//         break;
//     }else(
//         alert("We are sorry. " + lowerCaseInput + "is not available in our bakery")
        
//     )
//     break;

// }

// Q15  


























// Q16


// let university = "University of Karachi"
// let arr = university.split("")
// for (let i = 0 ; i <arr.length; i++) {
//     document.writeln(arr[i], "<br>")
// }


// Q17


// let userInput= prompt("Enter any word")
// let lastChar = userInput.charAt(userInput.length-1)
// console.log("user Input:", userInput)
// console.log("last Character of input:", lastChar)


// Q18


let str= "The quick brown fox jumps over the lazy dog"
let lowerCase = str.toLocaleLowerCase()
let count = lowerCase.match(/the/g).length
console.log("Text:", str)
console.log("There are", count, "occurrences of the word 'the'")












































































































































































