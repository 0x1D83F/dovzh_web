function burgerFunctional(){
    document.querySelector('.burger__close').classList.toggle('_open');
    document.querySelector('.burger__window').classList.toggle('_open_window')
    document.body.classList.toggle('_lock');
}