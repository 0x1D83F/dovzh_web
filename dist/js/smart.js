function smart() {
    const tape = document.querySelector('.smart-tape');
    const slide = document.querySelectorAll('.smart-slide');
    const sliderLength = document.querySelectorAll('.smart-slide').length - 1;
    const prev = document.querySelector('.smart-nav-prev');
    const next = document.querySelector('.smart-nav-next')
    tape.firstElementChild.classList.add('smart-first', 'smart-active')

    let counter = 0;

    function adaptiveHeight(){
        const activeSlide = document.querySelector('.smart-slide.smart-first');
        tape.style.cssText =`height: ${activeSlide.offsetHeight}px`
    }
    adaptiveHeight();

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

    next.addEventListener('click', () => {
        adaptiveHeight()
        counter++;

        if(counter >= sliderLength) counter = sliderLength;
        setActiveSlide();

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
        setActiveSlide();
        
        if(counter === 1){
            tape.style.transform = `translate3d(-105%,0,0)`
        } else {
            tape.style.transform = `translate3d(-${counter * 105}%,0,0)`
        }
    })
}
