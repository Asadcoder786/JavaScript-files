
// Chapter 31 to 35

// Q1
// let date = new Date();

// console.log("Current date and time:", date.toString())

// Q2






// let date = new Date();
// let monthNames = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// let currentmonth = monthNames[date.getMonth()]
// console.log("current month:",currentmonth);
// Q3

// let weekdayNames = ["sun","mon","tue","wed","thu","fri","sat"];
// let getWeeks = new Date();
// let currentday = weekdayNames[getWeeks.getDay()];
// console.log("Today is:", currentday.toUpperCase());


// Q4


// let weekdayNames = ["sun","mon","tue","wed","thu","fri","sat"];
// let getWeeks = new Date();
// let currentday = weekdayNames[getWeeks.getDay([0])];
// if (currentday === "sun" || currentday === "sat"){
//     alert("It's Fun Day")
// }else{ 
//     alert("It's a working day")
// }




// Q5



// let dateOfMonth = new Date();

// let date = (dateOfMonth.getDate());
// if (date < 16 ) {
//     console.log("Starting Fifteen Days of the month");

// }
// else {
//     console.log("Last days of the month");
// }


// Q6


// let currentDate = new Date();
// let milliSeconds = Date.now();

// let minutes = milliSeconds / (1000 * 60);
// console.log("Current Date;", currentDate);
// console.log("Elapsed milliseconds since january 1,1970;", milliSeconds);
// console.log("Elapsed minutes since january 1,1970;", minutes);



// Q7


// let AM = new Date();

// let time = AM.getTime()

// console.log(time);

// if (time == "AM"){
//     alert("It's AM")
// }
// else{
//     alert("It's AM")
// }

// Q8

// let lastDateOfMonth = new Date("Thu Dec 31 2020")

// console.log(lastDateOfMonth);

// Q9

// let dateRam = new Date("Feb 17 2026");

// let currentDate = new Date();

// let sum = dateRam - currentDate;
// console.log(sum);

// let daysRam =sum / (1000*60*60*24)
// console.log(Math.floor(daysRam));

// Q 10

// let refrenceDate = new Date();

// // console.log(refrenceDate);

// let timer = refrenceDate.getTime()
// console.log(timer);

// Q 11

// let hours = new Date();

// console.log(hours);
// let setting = hours.setHours(hours.getHours()+1)


// console.log("Ek gante baad",hours);


// Q 12

// let date = new Date()

// console.log("Abhi kha waqt: ",date);

// let years = date.setFullYear(date.getFullYear() - 100);

// console.log("100 saal phele: ",date);

// Q13

// let birthDate = 2007;

// let yearTime = new Date().getFullYear()

// let age = yearTime - birthDate;

// console.log("Age is", age);















































































