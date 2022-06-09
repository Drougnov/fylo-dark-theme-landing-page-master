function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.querySelector('.form');
const email = document.querySelector('.email');

form.addEventListener('submit',function(e){
    let emailValue = email.value;
    if(validateEmail(emailValue)){
        email.parentElement.classList.remove('empty');
        email.parentElement.classList.remove('invalid');
    }
    else if(!emailValue == '' && validateEmail(emailValue)===false){
        email.parentElement.classList.remove('empty');
        email.parentElement.classList.add('invalid');
        e.preventDefault();
    }
    else if(emailValue == ''){  // <-------'else' shows both error message in some case. So 'else if' is used instead of 'else'
        email.parentElement.classList.add('empty');
        email.parentElement.classList.remove('invalid');
        e.preventDefault();
    }
})