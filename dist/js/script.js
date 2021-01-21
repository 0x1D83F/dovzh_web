const main = new Swiper('.slider',{
    // autoplay: {
    //     delay: 2000,
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
    touchRatio: 0,
    simulateTouch: false
})

const about = new Swiper('.slider-about', {
    navigation: {
        nextEl: '.about-nav-next',
        prevEl: '.about-nav-prev'
    },
})


function arrowsHighlightForSwitch(){
    const prevButton = document.querySelector('.swiper__prev_sett');
    const nextButton = document.querySelector('.swiper__next_sett');

    let prevButtonPath = document.querySelector('.swiper__prev_sett svg path');
    let nextButtonPath = document.querySelector('.swiper__next_sett svg path');

    function defineActiveSlide(){
        const firstSlide = document.querySelector('.swiper-pagination').firstElementChild;
        const lastSlide = document.querySelector('.swiper-pagination').lastElementChild;

        if(!firstSlide.classList.contains('swiper-pagination-bullet-active')){
            prevButtonPath.setAttribute('fill-opacity', '0.8')
        }else{
            prevButtonPath.setAttribute('fill-opacity', '0.3')
        }

        if(!lastSlide.classList.contains('swiper-pagination-bullet-active')){
            nextButtonPath.setAttribute('fill-opacity', '0.8')
        }else{
            nextButtonPath.setAttribute('fill-opacity', '0.3')
        }

    }
    nextButton.addEventListener('click', defineActiveSlide)
    prevButton.addEventListener('click', defineActiveSlide)
}

arrowsHighlightForSwitch();;
function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')

    let scrollTop = document.documentElement.scrollTop;
    let distanceToTop = button.getBoundingClientRect().top + scrollTop;

    let sliderHeight = document.querySelector('.slider').offsetHeight;

    let buttonHeight = button.offsetHeight;


    let calc = sliderHeight - (distanceToTop + buttonHeight) ;
    pagination.style.bottom = `${calc}px`;
};
function observeSliderNav(){
    const slides = document.querySelector('.swiper-wrapper');
    const prevButtonPath = document.querySelector('.swiper__prev_sett svg path');
    const nextButtonPath = document.querySelector('.swiper__next_sett svg path');

    let observer = new MutationObserver( old => {
        let childs = slides.childNodes;
        let slidesArray = [];

        childs.forEach(item => {
            if(item.localName === 'div') slidesArray.push(item)
        })

        slidesArray.forEach((item,index) => {
            if(item.classList.contains('swiper-slide-active') ){
                if(index === 0){
                    prevButtonPath.setAttribute('fill-opacity', '0.3')
                    nextButtonPath.setAttribute('fill-opacity', '0.8')
                }
                else if(index !== 0){
                    prevButtonPath.setAttribute('fill-opacity', '0.8')
                    nextButtonPath.setAttribute('fill-opacity', '0.8')
                }
                if(index === slidesArray.length - 1){
                    nextButtonPath.setAttribute('fill-opacity', '0.3')
                }
            }
        })
    })

    observer.observe(slides, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
    })
}
;
function burgerFunctional(){
    document.querySelector('.burger__close').classList.toggle('_open');
    document.querySelector('.burger__window').classList.toggle('_open_window')
    document.body.classList.toggle('_unlock');
    document.body.classList.toggle('_lock');
};
function adaptiveImage(){
    let parents = document.querySelectorAll('.ibg');
    parents.forEach(item => {
        if(item.firstElementChild.tagName === 'IMG' && !item.firstElementChild.classList.contains('no-linear')){
            item.style.backgroundImage =
                `linear-gradient(180deg, #251447 0%, rgba(43, 29, 112, 0.4) 60%, rgba(37, 20, 71, 0.7) 72.4%, #251447 100%),
                 url( ${item.firstElementChild.getAttribute('src')} ) `
        } else{
            item.style.backgroundImage = `url( ${item.firstElementChild.getAttribute('src')} ) `
        }
    })
}
adaptiveImage()
;
function smart() {
    const tape = document.querySelector('.smart-tape');
    const slide = document.querySelectorAll('.smart-slide');
    const sliderLength = document.querySelectorAll('.smart-slide').length - 1;
    const prev = document.querySelector('.smart-nav-prev');
    const next = document.querySelector('.smart-nav-next')
    tape.firstElementChild.classList.add('_active-slide')

    let counter = 0;

    function adaptiveHeight(){
        const activeSlide = document.querySelector('.smart-slide._active-slide');
        tape.style.cssText =`height: ${activeSlide.offsetHeight}px`
    }
    adaptiveHeight();

    slide.forEach((slide,index) => {
        if(index !== 0){
            slide.style.transform = `translateX(${index * 105}%)`
        }
    })

    next.addEventListener('click', () => {
        adaptiveHeight()
        counter++;
        if(counter >= sliderLength) counter = sliderLength;
        if(counter === 0){
            tape.style.transform = `translate3d(-105%,0,0)`
        } else {
            tape.style.transform = `translate3d(-${counter * 105}%,0,0) `
        }
    })

    prev.addEventListener('click', () => {
        adaptiveHeight();
        counter--;
        if(counter < 0 ) counter = 0;
        if(counter === 1){
            tape.style.transform = `translate3d(-105%,0,0)`
        } else {
            tape.style.transform = `translate3d(-${counter * 105}%,0,0)`
        }

    })
}
;
window.addEventListener('resize', sliderPaginationIndent)
window.addEventListener('load', sliderPaginationIndent)
window.addEventListener('load', observeSliderNav)
window.addEventListener('load', smart)
window.addEventListener('resize', smart)
document.querySelector('.burger__close').addEventListener('click', burgerFunctional);

