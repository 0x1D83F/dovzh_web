function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')

    let scrollTop = document.documentElement.scrollTop;
    let distanceToTop = button.getBoundingClientRect().top + scrollTop;

    let sliderHeight = document.querySelector('.slider').offsetHeight;

    let buttonHeight = button.offsetHeight;


    let calc = sliderHeight - (distanceToTop + buttonHeight) ;
    pagination.style.bottom = `${calc}px`;
}