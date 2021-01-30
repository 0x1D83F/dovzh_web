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

function swiperContentHeight(){
    let logo = document.querySelector('.slide_main__type img').offsetHeight;
    let elem = document.querySelectorAll('.slide_main__content-text');
    elem.forEach(element => element.style.height = `${logo}px`)
}
function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')
    const clientWidth = document.documentElement.clientWidth || window.innerWidth;
    const scrollTop = document.documentElement.scrollTop;
    const sliderHeight = document.querySelector('.slider').offsetHeight;
    const adminbar = document.querySelector('#wpadminbar');
    const adminbarHeight = adminbar == null ? 0 : adminbar.offsetHeight;

    function setPaginationIndent(value){
        pagination.style.bottom = `${value}px`;
    }

    function desktopPagination(){
        let distanceToTop = button.getBoundingClientRect().top + scrollTop;
        let buttonHeight = button.offsetHeight;
        let calc = sliderHeight - (distanceToTop + buttonHeight) + adminbarHeight;
        return calc
    }


    if(clientWidth > 1024){
        setPaginationIndent( desktopPagination() )
    }else{
        setPaginationIndent(100);
    }
    if(sliderHeight < 590){
        setPaginationIndent(50);

    }
    if(sliderHeight < 490){
        setPaginationIndent(30);

    }
    let bottom = getComputedStyle(document.querySelector('.slider__nav'), null).getPropertyValue("bottom");
    let ticket = document.querySelector('.content-text__redirect-button a');
}


function burgerFunctional(){
    document.querySelector('.burger__close').classList.toggle('_open');
    document.querySelector('.burger__window').classList.toggle('_open_window');
    document.querySelector('.wrapper-content').classList.toggle('_blur');
    document.body.classList.toggle('_unlock');
    document.body.classList.toggle('_lock');
}

function adaptiveHeighForMobileBurgerMenu(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function headerAnimation(){
    const header = document.querySelector('.header-wrapper');
    setTimeout(() => {
        header.style.transform = `translateY(0)`;
    }, 1600)
}
function sliderAnimation(){
    const date = document.querySelectorAll('.content-text__date span');
    const title = document.querySelectorAll('.content-text__title h2')
    const desc = document.querySelectorAll('.content-text__discription p');
    const button = document.querySelectorAll('.content-text__redirect-button a');


    async function startAnim(){
        await setTimeout(() => {
            date.forEach( item => item.style.transform = `translateY(0)`)
        }, 300)
        await setTimeout(() => {
            title.forEach( item => item.style.transform = `translateY(0)`)
        }, 600);
        await setTimeout(() => {
            desc.forEach( item => item.style.transform = `translateY(0)`)
            button.forEach( item => item.style.opacity = `1`)

        }, 1000);

    }
    startAnim();
}


function eventsAnimation(){
    const title = document.querySelector('.events_header_title ');
    const line = document.querySelector('.events_line');

    const titleRect = title.getBoundingClientRect().top;
    const clientHeight = Math.max(document.documentElement.clientHeight || window.innerHeight);
    const clientWidth = Math.max(document.documentElement.clientWidth || window.clientWidth);
    if(titleRect <= (clientHeight / 1.3)){
        title.style.transform = `translateX(0)`;
        setTimeout(() => {
            line.style.transform = `translateX(0)`;
        },1000)
    }

    //Events
    const wrapper = document.querySelector('.events__content');
    const events = document.querySelectorAll('.events__item');
    const wrapperRect = wrapper.getBoundingClientRect().top;
    const loopValues = {
        desktop: {
            firstLine: {
                from: 0,
                to: 3
            },
            secondLine: {
                from: 3,
                to: 6
            },
            thirdLine: {
                from: 6,
                to: 9
            }
        }
    }
    function eventsAnimateLikeEqualizerDesktop(itemsArray, value, valueSec, valueThird, defineLine){

        function setStyleLoop(array,from, to){
            for(let i = from; i < to; i++){
                array[i].style.transform = `translateY(0)`;
                array[i].style.opacity = `1`;
            }
        }
        //Контрольные точки
        if(wrapperRect <= (clientHeight / value)){
            setStyleLoop(itemsArray, defineLine.firstLine.from, defineLine.firstLine.to);
        }
        if(wrapperRect <= valueSec){
            setStyleLoop(itemsArray, defineLine.secondLine.from, defineLine.secondLine.to);
        }
        if(wrapperRect <= valueThird){
            setStyleLoop(itemsArray, defineLine.thirdLine.from, defineLine.thirdLine.to)
        }
    }
    if(clientWidth > 490 && clientWidth < 768){
    }
    if(clientWidth > 768 && clientWidth < 1600){
        eventsAnimateLikeEqualizerDesktop(events, 1.4, 100, -320, loopValues.desktop);
    }
    if(clientWidth >= 1600){
        eventsAnimateLikeEqualizerDesktop(events, 1.4, 200, -150, loopValues.desktop);
    }


}

window.addEventListener('scroll', eventsAnimation);
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

window.addEventListener('click',(event) => {
    if(event.target.classList.contains('prev_def')){
        event.preventDefault();
        let target = event.target.getAttribute('data-type')
        if(target != null && !event.target.classList.contains('w-mobile')){
            document.querySelector(`#${target}`).scrollIntoView({block: "start", behavior: "smooth"});
        } else if(target != null && event.target.classList.contains('w-mobile')){
            burgerFunctional()
            document.querySelector(`#${target}`).scrollIntoView({block: "start", behavior: "smooth"});
        }
    }
})
window.addEventListener('load', () => {
    headerAnimation();
    sliderAnimation()
    adaptiveHeighForMobileBurgerMenu();
    swiperContentHeight();
    sliderPaginationIndent();
    smart()

})
window.addEventListener('resize', () => {
    adaptiveHeighForMobileBurgerMenu();
    swiperContentHeight();
    sliderPaginationIndent();
    smart();
})
document.querySelector('.burger__close').addEventListener('click', burgerFunctional)

