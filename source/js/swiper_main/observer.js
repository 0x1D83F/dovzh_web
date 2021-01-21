function observeSliderNav(wrapperClass, prevButtonClass, nextButtonClass){
    const slides = document.querySelector(`.${wrapperClass}`);
    const prevButtonPath = document.querySelector(`.${prevButtonClass} svg path`);
    const nextButtonPath = document.querySelector(`.${nextButtonClass} svg path`);

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
