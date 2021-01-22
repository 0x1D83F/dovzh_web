window.addEventListener('resize', sliderPaginationIndent)
window.addEventListener('resize', smart)
window.addEventListener('load', sliderPaginationIndent)
window.addEventListener('load', () => {
    // observeSliderNav('swiper-wrapper', 'swiper__prev_sett ', 'swiper__next_sett' );
    // observeSliderNav('swiper-wrapper-about', 'about-nav-prev', 'about-nav-next' );
    // observeSliderNav('smart-tape', 'smart-nav-prev', 'smart-nav-next' );
})

window.addEventListener('load', smart)
document.querySelector('.burger__close').addEventListener('click', burgerFunctional)