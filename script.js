const button=document.getElementById("toggle"); //misspelled toggle
const body=document.querySelector("body"); //misspelled body
function toggleTheme(){ //forgot the parantheses and it needs to be on top so that the event listener works
    body.classList.toggle("dark");
}
button.addEventListener("click", toggleTheme); 
