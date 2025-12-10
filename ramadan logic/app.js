let dateOfRam = new Date("Feb-17-2026");
let today = new Date();
let timeDiff = dateOfRam - today;
let daysdiff = Math.round(timeDiff / (1000 *60 * 60 *24));
let weeksDiff = Math.round(daysdiff / 7 );
let monthsDiff = Math.round(daysdiff / 30);
console.log("Total Days of Ramzan;", daysdiff);
console.log("Total weeks of Ramzan;", weeksDiff);
console.log("Total Monts of Ramzan;" , monthsDiff);


