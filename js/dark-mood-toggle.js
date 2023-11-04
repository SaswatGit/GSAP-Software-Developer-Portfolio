var mood = document.getElementById("mood");
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var bars = document.getElementsByClassName("bars")[0];

sun.style.display = "none";
mood.addEventListener("click", function(){
    document.body.classList.toggle("dark-mood");
    if(document.body.classList.contains("dark-mood")){
        moon.style.display = "none";
        sun.style.display = "block";
        bars.style.color = "white";
    }else{
        moon.style.display = "block";
        sun.style.display = "none";
        bars.style.color = "#222";
    }
});