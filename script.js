const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeat-password');
const check = document.querySelector('.check');


repeatPassword.addEventListener('input', () => {
    if (password.value !== repeatPassword.value) {
        check.classList.remove('hide');
    } else {
        check.classList.add('hide');
    }
});