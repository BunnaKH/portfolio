var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');
    var junior = document.querySelector('.text-wrapper div')
 
    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if(changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        junior.classList.add("text-section-none");
       
        
        changeIcon = false;

    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        junior.classList.remove("text-section-none");
        junior.classList.add("text-section");
        changeIcon = true;
    }
});



