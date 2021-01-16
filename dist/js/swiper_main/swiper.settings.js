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

arrowsHighlightForSwitch();