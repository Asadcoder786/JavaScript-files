// chapter 38 to 42


// Q1


// function argu(a,b) {
// return a**b
// }console.log(argu(5,3))

// // Q2


// function leap (year) {
//     if ( year %4 === 0) {
//         console.log(`${year} is a leap year`);
        
//     }else {
//         console.log(`${year} is not a leap year`);
        
//     }
// }console.log(leap(1976));


// Q3



// function area(a,b,c) {
//     let S = (a+b+c)/2
//     console.log(S)
//     function total() {
//         let A;
//          A = S*(S-a)*(S-b)*(S-c)
//         return A
//     }console.log(total());
    
// } 

// area(5,10,15)

// Q4

// function mainFunction (){

//     function sub(sub1,sub2,sub3) {
//         let noofSub = 3;
//         let oneSub = 100;
//         let total = 3*100

//         function average () {
//             let average = (sub1+sub2+sub3)/noofSub
//             console.log(average)
//             function per() {
//                 let per = ((sub1+sub2+sub3)/total)*100
//                 console.log(`The percentage is: ${per}%`);
                
//             }per()
//         }average()
        

//     }sub(50,100,80)
    
// }mainFunction()


// Q6




// function vowelRemove () {
//     let para = `This is an aeroplane`;
//     let paraArr = para.split("");
//     for (let i = 0; i<paraArr.length; i++) {
//         if (paraArr[i]==="a"||paraArr[i]==="e"||paraArr[i]==="i"||paraArr[i]==="o"||paraArr[i]==="u") {
//                paraArr.splice(i,1)
//         }
//     }
//     console.log(paraArr.join("").trim());
    
// }vowelRemove()





















