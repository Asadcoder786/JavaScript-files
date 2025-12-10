var showBtn = document.getElementById("show");
var hideBtn = document.getElementById("hide");
var headingElement = document.getElementById("heading");
function showHeading () {
showBtn.className = "hide";
hideBtn.className = "show";
headingElement.className= "show";
}
function hideHeading () {
showBtn.className = "show";
hideBtn.className = "hide";
headingElement.className= "hide";
}
