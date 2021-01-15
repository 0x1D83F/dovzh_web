let main = new Swiper('.slider',{
    // autoplay: {
    //     delay: 5000,
    // },
    navigation: {
        nextEl: '.swiper__next',
        prevEl: '.swiper__prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination__line + ' + className + '"></span>';
        },
    },
    touchRatio: 0
})

function arrowsHighlightForSwitch(){
    const prevButton = document.querySelector('.swiper__prev_sett');
    const nextButton = document.querySelector('.swiper__next_sett');

    let prevButtonPath = document.querySelector('.swiper__prev_sett svg path');
    let nextButtonPath = document.querySelector('.swiper__next_sett svg path');

    function defineActiveSlide(){
        const firstSlide = document.querySelector('.swiper-pagination').firstElementChild;
        const lastSlide = document.querySelector('.swiper-pagination').lastElementChild;

        if(!firstSlide.classList.contains('swiper_main-pagination-bullet-active')){
            prevButtonPath.setAttribute('fill-opacity', '0.8')
        }else{
            prevButtonPath.setAttribute('fill-opacity', '0.3')
        }

        if(!lastSlide.classList.contains('swiper_main-pagination-bullet-active')){
            nextButtonPath.setAttribute('fill-opacity', '0.8')
        }else{
            nextButtonPath.setAttribute('fill-opacity', '0.3')
        }

    }
    nextButton.addEventListener('click', defineActiveSlide)
    prevButton.addEventListener('click', defineActiveSlide)
}

function arrowsHightlightForAutoPlay(){
    let container = document.querySelector('.slider')
}

arrowsHighlightForSwitch();;
function showOrCloseBurger(event){
    let target = event.target;
    let parent = document.querySelector('.burger')
    if(target.classList.contains('header__burger_button') || target.classList.contains('burger__button')){
        parent.classList.toggle('_active_burger');
    }
};
window.addEventListener('resize', sliderPaginationIndent)
window.addEventListener('load', sliderPaginationIndent)
document.addEventListener('click', showOrCloseBurger);;
function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')

    let distanceToTop = button.getBoundingClientRect().top;
    if(distanceToTop >= 835) distanceToTop = 835;

    let clientWindow = document.documentElement.clientHeight;
    if(clientWindow >= 1080) clientWindow = 1080;

    let calc = clientWindow - (distanceToTop + button.offsetHeight); // 1080 - 833 + 25
    pagination.style.bottom = `${calc}px`;

};
