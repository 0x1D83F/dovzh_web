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
