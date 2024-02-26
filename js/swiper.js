//  ARCHIVO DE ACCIÓN PARA TRAICIONAR FOTOS  INDEX  
// PORTADA DE LA PAGINA DE INICIO

var swiper = new Swiper(".swiper-index", {
    spaceBetween: 10,
    centeredSlides: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// procedimientos( X4 )

var swiper = new Swiper(".swiper-procedimiento", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween:0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween:0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween:0,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween:0,
        },
    },
});

// medicos ( X5 )

var swiper = new Swiper(".swiper-medico", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1536: {
            slidesPerView: 5,
            spaceBetween: 15,
        }
    },
});



// testimonios ( X3 )

// var swiper = new Swiper(".swiper-testimonio", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 25,
//         },
//     },
// });
