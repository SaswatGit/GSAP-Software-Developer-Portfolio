var bars = document.getElementsByClassName("bars")[0];
var nav_links = document.getElementsByClassName("nav-links")[0];
var navbar = document.getElementsByClassName("navbar")[0];
bars.addEventListener("click", function () {
    nav_links.classList.toggle("nav-links-toggle");
    bars.classList.toggle("bars-toggle");
    navbar.classList.toggle("nav-toggle");
});
