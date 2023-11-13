function toggleTheme(){
 let body = document.body;
 body.classList.toggle("dark-mode");
}

let button = document.getElementById("toggleButton");
button.onclick = toggleTheme;