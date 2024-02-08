
let navBtn = document.getElementById("nav-btn");
let navMenu = document.getElementById("nav-menu");


navBtn.addEventListener("click", function () {
    navMenu.classList.toggle("menuOpen");
})


// swiper 

let swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 2000,
    },

    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },

    }
})

// scroll reveal 

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
});


sr.reveal('.hero__text', { origin: "top" })

