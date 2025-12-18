// let emailInput = document.getElementById("email")
// let passwordInput = document.getElementById("password")
// function submitHandler () {
//     console.log("Email:==>",emailInput.value)
//     console.log("Password:==>",passwordInput.value);
    
// }
// let firstName = document.getElementById("1stName");
// let lastName = document.getElementById("2ndName")
// let mobileNumber = document.getElementById("mobNo")
// let userPassword = document.getElementById("pass")
// function registerHandler () {
//     console.log("First Name:",firstName.value);
//     console.log("Last Name:",lastName.value);
//     console.log("Mobile Number:",mobileNumber.value);
//     console.log("User Password:",userPassword.value);
    
    
    
    
// }
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function submitHandler(e) {
  e.preventDefault(); 

  let email = emailInput.value;
  let password = passwordInput.value;

  if (!email.includes("@")) {
    Swal.fire("Invalid Email", "Email should contain @", "error");
    return;
  }

  if (password === "") {
    Swal.fire("Password Required", "Please enter a password", "warning");
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Login Successfully",
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    localStorage.setItem("isLogin", "true");
    window.location.href = "dashboard.html";
  });
}
