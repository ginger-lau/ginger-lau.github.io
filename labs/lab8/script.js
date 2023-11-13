function toggleTheme(){
 let body = document.body;
 body.classList.toggle("dark-mode")
}

let button1 = document.getElementById("toggleButton");
button1.onclick = toggleTheme;