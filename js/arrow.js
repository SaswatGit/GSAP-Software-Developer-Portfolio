var arrow = document.getElementsByClassName("arrow")[0];

window.addEventListener("scroll", function(){
    if(window.scrollY > 10){
        arrow.classList.add("show-arrow");
    }else{
        arrow.classList.remove("show-arrow");
    }
});