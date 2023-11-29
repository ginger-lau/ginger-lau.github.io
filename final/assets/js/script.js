function toggleProjects(){
    let cardsSecondHalf = document.getElementById("cards-second-half");
    cardsSecondHalf.classList.toggle("hidden"); 
  }
  
  document.getElementById("toggle-button").onclick = toggleProjects;
