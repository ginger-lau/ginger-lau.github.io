function toggleProjects(){
    let songsProjectHalf = document.getElementById("cards-second-half");
    songsProjectHalf.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleProjects;

// Get projects-text element 
const projectsText = document.querySelector('.projects-text');


projectsText.style.opacity = 0; 


window.addEventListener('load', () => {
  const fadeEffect = setInterval(function () {
  
    if(projectsText.style.opacity == 1){
      clearInterval(fadeEffect);
    }
   
    projectsText.style.opacity = +projectsText.style.opacity + 0.1; 
  }, 50);
})