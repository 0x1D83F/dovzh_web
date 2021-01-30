window.addEventListener('load', () => {
    headerAnimation();
    sliderAnimation()
    adaptiveHeighForMobileBurgerMenu();
    swiperContentHeight();
    sliderPaginationIndent();
    smart()

})
window.addEventListener('resize', () => {
    adaptiveHeighForMobileBurgerMenu();
    swiperContentHeight();
    sliderPaginationIndent();
    smart();
})
document.querySelector('.burger__close').addEventListener('click', burgerFunctional)