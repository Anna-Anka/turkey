export const swiper = new Swiper('.objects__wrapper', {
    centerMode: true,
    initialSlide: 2,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
});