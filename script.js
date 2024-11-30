const myForm = document.querySelector('.main').querySelector('form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
myForm.addEventListener('submit',function(e){
    if(inputName.value === ''||inputEmail.value == ''||inputPassword.value === ''){
        alert('please fill out all the forms!');
        e.preventDefault();
    }
})