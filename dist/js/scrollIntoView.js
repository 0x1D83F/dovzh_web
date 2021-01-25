function scrollTo(elem){

}
// function defineClick(event){
//     const target = event.target.getAttribute('data-anchor');
//     scrollTo()
// }
document.querySelector('.header-wrapper').addEventListener('click',(event) => {
    event.preventDefault();
    let target = event.target.getAttribute('data-type')
    document.querySelector(`#${target}`).scrollIntoView({block: "start", behavior: "smooth"});
})