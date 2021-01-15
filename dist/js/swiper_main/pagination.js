function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')

    let distanceToTop = button.getBoundingClientRect().top;
    if(distanceToTop >= 835) distanceToTop = 835;

    let clientWindow = document.documentElement.clientHeight;
    if(clientWindow >= 1080) clientWindow = 1080;

    let calc = clientWindow - (distanceToTop + button.offsetHeight); // 1080 - 833 + 25
    pagination.style.bottom = `${calc}px`;

}