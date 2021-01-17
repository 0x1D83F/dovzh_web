function relocatePagination(){

    let observer = new MutationObserver( () => {
        const pagination = document.querySelector('.slider__nav');

        let distanceToTop = pagination.getBoundingClientRect().top;
        if(distanceToTop >= 835) distanceToTop = 835;

        let clientWindow = document.documentElement.clientHeight;
        if(clientWindow >= 1080) clientWindow = 1080;

        let calc = clientWindow - (distanceToTop + pagination.offsetHeight);

        let currentDistance = sliderPaginationIndent();
    })

}