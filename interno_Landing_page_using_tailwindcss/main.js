
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

// hero section 
sr.reveal('.hero__text', { origin: "top" });

// steps 
sr.reveal('.steps__step', { origin: "top", interval: 300, });

// about 
sr.reveal('.about__text', { origin: "right", });
sr.reveal('.about__img', { origin: "left", });


// brands 
sr.reveal('.brands__img img', { origin: "top", interval: 150, });


// work 
sr.reveal('.work__heading h2,.work__heading p', { origin: "top", interval: 500, });
sr.reveal('.work__item__left', { origin: "right", });
sr.reveal('.work__item__right', { origin: "left", });
