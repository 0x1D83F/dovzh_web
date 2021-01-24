const mainSlider = new Swiper('.slider',{
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
    simulateTouch: false,
    loop: true,

})



const aboutSlider = new Swiper('.slider-about', {
    navigation: {
        nextEl: '.about-nav-next',
        prevEl: '.about-nav-prev'
    },
    spaceBetween: 150,
    autoHeight: true,
    loop: true
})

function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')
    const clientWidth = document.documentElement.clientWidth || window.innerWidth;
    const scrollTop = document.documentElement.scrollTop;
    const sliderHeight = document.querySelector('.slider').offsetHeight;

    function setPaginationIndent(value){
        pagination.style.bottom = `${value}px`;
    }

    function desktopPagination(){
        let distanceToTop = button.getBoundingClientRect().top + scrollTop;
        let buttonHeight = button.offsetHeight;
        let calc = sliderHeight - (distanceToTop + buttonHeight);
        return calc
    }
    function mobilePagination(){

    }


    if(clientWidth > 1024){
        setPaginationIndent( desktopPagination() )
    } else{
        setPaginationIndent(80);
    }
}


function burgerFunctional(){
    document.querySelector('.burger__close').classList.toggle('_open');
    document.querySelector('.burger__window').classList.toggle('_open_window');
    document.querySelector('.wrapper-content').classList.toggle('_blur');
    document.body.classList.toggle('_unlock');
    document.body.classList.toggle('_lock');
}
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

function smart() {
    const tape = document.querySelector('.smart-tape');
    const slide = document.querySelectorAll('.smart-slide');
    const sliderLength = document.querySelectorAll('.smart-slide').length - 1;
    const prev = document.querySelectorAll('.smart-nav-prev');
    const next = document.querySelectorAll('.smart-nav-next');
    tape.firstElementChild.classList.add('smart-first', 'smart-active')

    let counter = 0;

    function adaptiveHeight(){
        const activeSlide = document.querySelectorAll('.smart-slide');
        let heightArray = [];
        activeSlide.forEach(slide => {
            heightArray.push(slide.offsetHeight)
        })
        tape.style.cssText =`height: ${Math.max.apply(this,heightArray)}px`
    }
    adaptiveHeight();

    function highlightArrows(){
        if(tape.firstElementChild.classList.contains('smart-active')){
            document.querySelectorAll('.smart-nav-prev svg path').forEach( arrow => arrow.style.fillOpacity = `.3`)
            document.querySelectorAll('.smart-nav-next svg path').forEach( arrow => arrow.style.fillOpacity = `.8`)
        }
        if(!tape.firstElementChild.classList.contains('smart-active')){
            document.querySelectorAll('.smart-nav-prev svg path').forEach( arrow => arrow.style.fillOpacity = `.8`)
        }
        if(tape.lastElementChild.classList.contains('smart-active')){
            document.querySelectorAll('.smart-nav-next svg path').forEach( arrow => arrow.style.fillOpacity = `.3`)
        }
    }

    function setActiveSlide(){
        // Ищем элемент и удаляем у него активный класс
        function removeClass(){
            for (let children of tape.children) {
                if(children.classList.contains('smart-active')) {
                    children.classList.remove('smart-active')
                }
            }
        }
        // Если это первый элемент
        if( counter <= 0) {
            removeClass()
            tape.children[counter].classList.add('smart-active')
        } else{
            removeClass()
            tape.children[counter].classList.add('smart-active')
        }

    }

    slide.forEach((slide,index) => {
        if(index !== 0){
            slide.style.transform = `translateX(${index * 105}%)`
        }
    })
    next.forEach(next => {
        next.addEventListener('click', () => {
            adaptiveHeight()
            counter++;


            if(counter >= sliderLength) counter = sliderLength;
            setActiveSlide();
            highlightArrows();

            if(counter === 0){
                tape.style.transform = `translate3d(-105%,0,0)`
            } else {
                tape.style.transform = `translate3d(-${counter * 105}%,0,0) `
            }
        })
    })

    prev.forEach(prev =>{
        prev.addEventListener('click', () => {
            adaptiveHeight();
            counter--;

            if(counter < 0 ) counter = 0;
            setActiveSlide();
            highlightArrows();

            if(counter === 1){
                tape.style.transform = `translate3d(-105%,0,0)`
            } else {
                tape.style.transform = `translate3d(-${counter * 105}%,0,0)`
            }
        })
    })

}

function clubsAdaptiveReplacer(){
    const container = document.querySelector('.children_info');
    let img = document.querySelector('.children_image').outerHTML;
    const text = document.querySelector('.children_info-more').outerHTML;
}
clubsAdaptiveReplacer();
window.addEventListener('resize', sliderPaginationIndent)
window.addEventListener('resize', smart)
window.addEventListener('load', sliderPaginationIndent)
window.addEventListener('load', () => {

})

window.addEventListener('load', smart)
document.querySelector('.burger__close').addEventListener('click', burgerFunctional)

