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

