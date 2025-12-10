
function GeneratePassword(){

    let password = "jkgkjgjhgjhgkjgjg4546546545@@##$$%%^^&&?????((()))&&&++++"
    let pass = ""

 
    for (let i = 0;i<12;i++){

       pass += password[Math.floor(Math.random() * password.length)]

        
    }
    let paragraph = document.getElementById("pass")

   paragraph.innerText = `The pasword is ===> ${pass}  and the length is ${pass.length}`

 console.log("Password ===>",pass);
 
    
} 
 