console.log("js is running");
// let newDate = new Date(2026,11,24,15,40,0)
// console.log(newDate)
// const now = new Date();
// console.log(now);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());
// // console.log(newDate.getDate);
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());


// chapter 35 to 38
// Q1

// function myDate () {
//     let myDate = new Date()
//     console.log(myDate)
// }

// myDate()

// Q2

// function fullName(){
// let firstName = prompt("Enter Your First Name")
// let lastName = prompt("Enter YOur Last Name")
// let fullName = firstName + " " + lastName
// console.log("First Name:",firstName);
// console.log("Last Name:", lastName );
// console.log("Full Name:",fullName)
// alert(fullName)
// }
// fullName()

// Q3



// function add(){
//     let num1 = +prompt("Enter first number",5)
//     let num2 = +prompt("Enter second number",5)

//     let sum = num1 + num2
//    return console.log("Return Value",sum);
// }

// add()

// Q4


// function threeValue(a,b,operator) {
//   if ( operator == "+") {
//     return a + b;
//   }else if (operator == "-"){
//     return a-b ; 
//   }else if (operator == "*") {
//     return a * b ; 
//   }else if (operator == "/") {
//     return a/b;
//   }
    
// }
// console.log(threeValue(10,13,"/"))


// Q5  

// function numSquare (a) {
//     return a * a
// }

// let square = numSquare(8)
// console.log(square)

// Q6



// function factorial (a) {
//    return a**2
// }

// console.log("Result:",factorial(6));


// Q7

// function middle () {
//     let a = +prompt("Enter the First Value")
// let b = +prompt("Enter the last Value")
// for ( let i = a ; i<= b ; i++) {
//     console.log(i)
// }
// }
// middle()

// Q8

// function hyp(base,per) {
//     let hyp = base + per ;
//     console.log("Hypoteneus:" ,hyp);
//     function sq (){
//         return hyp ** 2
        
//     }
//     console.log(sq())
// }
// hyp(5,10)

// Q9


// function value () {
//     let w = 6;
//     let h = 10;
//     let result = w * h;
//     return console.log("Result:",result)
// }
// value()


// Q10


// function myFunction () {
// let value = prompt("Enter Your value.I will check it it is palindrone or not")
// let reverseValue = value.split("").reverse().join("")
// if ( value === reverseValue) {
//     alert("It is Palindrone")
// }else {
//     alert ("It is not palindrome")
// }
// }

// myFunction()


// Q11



// function capital () {
//     let para = "the quick brown fox";
//     let returnValue = para.split(" ")
//     for (let i = 0 ; i<returnValue.length; i++ ) {
//         // console.log(returnValue[i][0].toUpperCase());
//         let upper = returnValue[i][0].toUpperCase();
//         let remain = returnValue[i].slice(1)
//         let concat = upper + remain;
//         para += " " + concat ; 
        
        
//     }
//     let newPara = para.split(" ").slice(4).join(" ")
    
     
//     console.log("After uppercase --->",newPara)
    
// }

// capital()


// Q12


// function longestString (str1,str2,str3) {
//     let longest = str1;
//     if (str2.length > longest.length) {
//         longest = str2;
//     }
//     if (str3.length > longest.length) {
//         longest = str3;
//     }
//     return longest;

// }
// let a = prompt("Enter the first string")
// let b = prompt("Enter the second string")
// let c = prompt("Enter the third string")
// let result = longestString(a,b,c)
// alert("The longest string is:"+ "  "+ result)


// Q13

// function charCount () {
//     let str = "Jsresourses.com";
//     let char = "o";
//     let count = 0;
//     for (let i = 0; i<str.length ; i++) {
//         if (str.charAt(i)=== char) {
//             count++
//             console.log(`The character found in ${char}at index ${i}`);
            
//         }

//     }
//         console.log(`The total time is ${count} character ${char} found in`);
// }
// charCount()

// Q14

// function calcCircum(radius){
//     let circumCircle = 2*3.15*radius
//     return circumCircle
    
// }console.log("The circumference is :",calcCircum(2));

// function calcArea(radius){
//     let area2  = 3.15*(radius**2)
//     return area2
// }console.log("The area is :",calcArea(2));



