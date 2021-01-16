let main = new Swiper('.slider',{
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

    let distanceToTop = button.getBoundingClientRect().top;
    if(distanceToTop >= 835) distanceToTop = 835;

    let clientWindow = document.documentElement.clientHeight;
    if(clientWindow >= 1080) clientWindow = 1080;

    let calc = clientWindow - (distanceToTop + button.offsetHeight); // 1080 - 833 + 25
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
;
window.addEventListener('resize', sliderPaginationIndent)
window.addEventListener('load', sliderPaginationIndent)
window.addEventListener('load', observeSliderNav);

