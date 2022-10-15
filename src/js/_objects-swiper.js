export const swiper = new Swiper('.objects__wrapper', {
    centerMode: true,
    initialSlide: 2,
    loop: true,
    speed: 800,
    observer: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnlastSlide: false,
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