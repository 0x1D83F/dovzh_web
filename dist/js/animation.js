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