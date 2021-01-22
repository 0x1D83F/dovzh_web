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



// const sliderChilds = highlightSlidersArrows('swiper-wrapper-about', 'about-nav-prev', 'about-nav-next' );
// const sliderAbout = highlightSlidersArrows('smart-tape', 'smart-nav-prev', 'smart-nav-next' );