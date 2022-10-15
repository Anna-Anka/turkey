import './_libs';
import './_templates';
import './_components';
import './_vendor'

// * forms
import { formFunction } from './_form';
formFunction();

// * swiper
import '../../node_modules/swiper/swiper-bundle.min.js'
import { swiper } from './_objects-swiper';

// * header-sticky
import { headerSticky } from './templates/header-sticky';
headerSticky()

// * smooth-scroll
import { smoothScroll } from './templates/smooth-scroll';
smoothScroll()
