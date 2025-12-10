

let userNumber = +prompt("Enter the Secret Number 1 to 10")


let secretNumber = 7

if ( userNumber == secretNumber ) {
    alert("Congratulation Your answer is correct")
}
else if (userNumber + 1 == secretNumber )
{
    alert("bas ek step door")
}
else if (userNumber -1 == secretNumber) (
    alert("Bas ek step peche")
)
else if (userNumber -2 == secretNumber) (
    alert("Bas 2 step peche")
)
else if (userNumber +2 == secretNumber) (
    alert("Bas 2 step aga")
)
else if (userNumber +5  == secretNumber || userNumber +6  == secretNumber|| userNumber +3  == secretNumber
    ||userNumber -3  == secretNumber
)   (
    alert("Try again")
)


