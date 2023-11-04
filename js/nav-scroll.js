var navbar = document.getElementsByClassName("navbar")[0];

window.addEventListener("scroll", function(){
    if(window.scrollY >= 10){
        navbar.classList.add("scroll-nav");
    }
    else{
        navbar.classList.remove("scroll-nav");
    }
});