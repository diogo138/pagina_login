function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

let inputEmail = document.querySelector('.email');
let btnSubmit = document.querySelector('.submit');
let span = document.querySelector('.span--valid');

btnSubmit.addEventListener('click',(event)=> {
    
    if(!validateEmail(inputEmail.value)){
        event.preventDefault();
        inputEmail.style.backgroundImage = "url('assets/img/at-error.png')"
        inputEmail.classList.add('email--invalid')
        span.classList.remove('span--valid')
    }
});
