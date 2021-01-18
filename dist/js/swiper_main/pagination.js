function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')

    let scrollTop = document.documentElement.scrollTop;
    let distanceToTop = button.getBoundingClientRect().top + scrollTop;
    // let distanceToTop = button.scrollHeight;
    // if(distanceToTop >= 835) distanceToTop = 835;

    let sliderHeight = document.querySelector('.slider').offsetHeight;

    let buttonHeight = button.offsetHeight;


    let calc = sliderHeight - (distanceToTop + buttonHeight) ; // 531 - 380
    pagination.style.bottom = `${calc}px`;
}