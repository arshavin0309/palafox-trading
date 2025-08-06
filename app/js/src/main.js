const mainWhySwiper = new Swiper('.main-why__swiper', {
    slidesPerView: 1,
    spaceBetween: 24,

    navigation: {
        nextEl: '.main-why__swiper-button-next',
        prevEl: '.main-why__swiper-button-prev',
    },

    breakpoints: {
        501: {
            slidesPerView: 'auto',
        },
        1201: {
            slidesPerView: 3,
        }
    },
});

const mainTypesSwiper = new Swiper('.main-types__swiper', {
    slidesPerView: 1,
    spaceBetween: 24,

    breakpoints: {
        501: {
            slidesPerView: 'auto',
        },
        1201: {
            slidesPerView: 3,
        }
    },
});

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

let offsets = {};

function updateOffsets() {
    if (window.innerWidth > 1200) {
        offsets = {
            'types': 57,
            'platform': 57,
            'about': 187,
            'analytics': 57,
            'contacts': 187,
        };
    } else if (window.innerWidth > 768) {
        offsets = {
            'types': 57,
            'platform': 57,
            'about': 137,
            'analytics': 57,
            'contacts': 137,
        };
    } else {
        offsets = {
            'types': 50,
            'platform': 50,
            'about': 130,
            'analytics': 50,
            'contacts': 130,
        };
    }
}

// начальное определение
updateOffsets();

// пересчитываем при изменении размера окна
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateOffsets, 150);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const targetID = href.split('#')[1];

        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            e.preventDefault();

            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offset = offsets[targetID] || 0;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});