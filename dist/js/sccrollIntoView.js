function scrollTo(elem){
    document.querySelector(elem).scrollIntoView({block: "center", behavior: "smooth"});
}
function defineClick(event){
    const target = event.target.className;
    console.log(target)
}
document.querySelector('.header-wrapper').addEventListener('click',defineClick)