function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')

    let distanceToTop = button.getBoundingClientRect().top;
    if(distanceToTop >= 835) distanceToTop = 835;

    let sliderHeight = slider.offsetHeight;

    let calc = sliderHeight - (distanceToTop + button.offsetHeight); // 1080 - 833 + 25
    pagination.style.bottom = `${calc}px`;
}