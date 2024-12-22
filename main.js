import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";

import './sass/_app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css/bundle';

const reviewSlider = new Swiper('.review-slider .swiper', {
    speed: 800,
    loop: true,
    spaceBetween: 50,
    navigation: {
        prevEl: '.review-navigation__prev',
        nextEl: '.review-navigation__next',
    },
});

const partnersSlider = new Swiper('.partners-slider', {
    speed: 800,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 2,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const top = item.querySelector(".faq-item__top");
        const text = item.querySelector(".faq-item__text");

        text.style.maxHeight = "0";
        text.style.overflow = "hidden";
        text.style.transition = "max-height 0.3s ease";

        top.addEventListener("click", () => {
            const isOpen = text.style.maxHeight !== "0px";

            top.classList.toggle("open")

            faqItems.forEach((otherItem) => {
                const otherTop = otherItem.querySelector(".faq-item__top");
                const otherText = otherItem.querySelector(".faq-item__text");

                if (otherText !== text) {
                    otherText.style.maxHeight = "0";
                }

                if (otherTop !== top) {
                    otherTop.classList.remove("open")
                }
            });

            if (isOpen) {
                text.style.maxHeight = "0";
            } else {
                text.style.maxHeight = "0"; // Сброс перед применением
                void text.offsetHeight; // Принудительное обновление
                text.style.maxHeight = `${text.scrollHeight}px`;
            }
        });
    });
});

document.getElementById('js-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // плавная прокрутка
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const headerBurger = document.getElementById("js-header-burger");
    const burgerMenu = document.getElementById("js-burger-menu");
    const burgerClose = document.getElementById("js-burger-close");

    headerBurger.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        document.documentElement.classList.toggle("lock");
    });

    burgerClose.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        document.documentElement.classList.remove("lock");
    });
});
