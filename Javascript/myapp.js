const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1:0;
    slider.style.transform = 'translateX('+ (sectionIndex)*-33.33 + '%)';
});

rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1:2;
    slider.style.transform = 'translateX('+ (sectionIndex)*-33.33 + '%)';
});

// responsive navbar
const mob_nav = document.querySelector(".mob-navbar-btn")
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mob_nav.addEventListener("click", () => toggleNavbar());