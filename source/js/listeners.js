window.addEventListener('resize', sliderPaginationIndent)
window.addEventListener('load', sliderPaginationIndent)
window.addEventListener('load', () => {
    observeSliderNav('swiper-wrapper', 'swiper__prev_sett ', 'swiper__next_sett' );
    observeSliderNav('swiper-wrapper-about', 'about-nav-prev', 'about-nav-next' );
})
window.addEventListener('load', smart)
window.addEventListener('resize', smart)
document.querySelector('.burger__close').addEventListener('click', burgerFunctional)