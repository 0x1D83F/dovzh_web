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
        setPaginationIndent(calc);
    }


    if(clientWidth > 1024){
        desktopPagination()
    } else{
        setPaginationIndent(83);
    }


}