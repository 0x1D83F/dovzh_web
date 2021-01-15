function showOrCloseBurger(event){
    let target = event.target;
    let parent = document.querySelector('.burger')
    if(target.classList.contains('header__burger_button') || target.classList.contains('burger__button')){
        parent.classList.toggle('_active_burger');
    }
}