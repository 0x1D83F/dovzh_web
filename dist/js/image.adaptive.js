function adaptiveImage(){
    let parents = document.querySelectorAll('.ibg');
    parents.forEach(item => {
        if(item.firstElementChild.tagName === 'IMG'){
            item.style.backgroundImage =
                `linear-gradient(180deg, #251447 0%, rgba(43, 29, 112, 0.4) 60%, rgba(37, 20, 71, 0.7) 72.4%, #251447 100%),
                 url( ${item.firstElementChild.getAttribute('src')} ) `
        }
    })
}
adaptiveImage()
