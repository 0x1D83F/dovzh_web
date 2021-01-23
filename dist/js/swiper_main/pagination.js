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
    }  else{
        setPaginationIndent(90);
    }


}