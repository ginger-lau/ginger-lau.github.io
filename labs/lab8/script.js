//toggleTheme switches the "dark-mode" of entire body when run
function toggleTheme(){ 
 var body = document.body              //selecting body
 body.classList.toggle("dark-mode")    //assign toggle "dark-mode" to body
}

let buttonVariable = document.getElementById("toggleButton");             // set var to selection button with toggleButton ID
buttonVariable.onclick = toggleTheme;                           // when toggleButton is clicked, run toggleTheme funct
