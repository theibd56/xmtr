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