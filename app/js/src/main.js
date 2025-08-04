const mainWhySwiper = new Swiper('.main-why__swiper', {
    slidesPerView: 3,
    spaceBetween: 24,

    navigation: {
        nextEl: '.main-why__swiper-button-next',
        prevEl: '.main-why__swiper-button-prev',
    },
});

// const mainAboutSwiper = new Swiper(".main-about__swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     direction: 'vertical',

//     pagination: {
//         el: ".main-about__pagination",
//         clickable: true,
//         renderBullet: function (index, className) {
//             return (
//                 '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
//             );
//         },
//     },
// });

const mainAboutSwiper = new Swiper(".main-about__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'vertical',

    pagination: {
        el: ".main-about__pagination",
        clickable: true,
        renderBullet: function (index, className) {
            const years = [2009, 2014, 2017, 2020, 2023];
            return `<span class="${className}">${years[index]}</span>`;
        },
    },

    navigation: {
        nextEl: '.main-about__next',
        prevEl: '.main-about__prev',
    },
});