
let navBtn = document.getElementById("nav-btn");
let navMenu = document.getElementById("nav-menu");


navBtn.addEventListener("click", function () {
    navMenu.classList.toggle("menuOpen");
})


// swiper 

let swiper = new swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})