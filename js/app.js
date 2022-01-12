const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validateURL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
let bottun = document.querySelector('button');
let name = document.querySelector('input[name=name]');
let email = document.querySelector('input[name=email]');
let password = document.querySelector('input[name=password]');
let cpassword = document.querySelector('input[name=cpassword]');
let age = document.querySelector('input[name=age]');
let phone = document.querySelector('input[name=phone]');
let url = document.querySelector('input[name=url]')
let message = document.querySelector('textarea');
let inputs= document.querySelectorAll('input');
let body=document.body;
bottun.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value.length > 3 && name.value.length < 10) {
        if (name.classList.contains('novalid')) {
            name.classList.remove('novalid')
        }
        name.classList.add('valid')

    } else {
        if (name.classList.contains('valid')) {
            name.classList.remove('valid')
        }
        name.classList.add('novalid')
    }
    if (email.value.match(validateEmail)) {
        if (email.classList.contains('novalid')) {
            email.classList.remove('novalid')
        }
        email.classList.add('valid')
    } else {
        if (email.classList.contains('valid')) {
            email.classList.remove('valid');
        }

        email.classList.add('novalid');
    }
    if (password.value.length > 6) {
        if (password.classList.contains('novalid')) {
            password.classList.remove('novalid')
        }
        password.classList.add('valid');
    } else {
        if (password.classList.contains('valid')) {
            password.classList.remove('valid');
        }
        password.classList.add('novalid');
    }
    if (cpassword.value.length > 6 && password.value == cpassword.value) {
        if (cpassword.classList.contains('novalid')) {
            cpassword.classList.remove('novalid')
        }
        cpassword.classList.add('valid');
    } else {
        if (cpassword.classList.contains('valid')) {
            cpassword.classList.remove('valid');
        }
        cpassword.classList.add('novalid');
    }
    if (age.value > 18) {
        if (age.classList.contains('novalid')) {
            age.classList.remove('novalid')
        }
        age.classList.add('valid');
    } else {
        if (age.classList.contains('valid')) {
            age.classList.remove('valid');
        }
        age.classList.add('novalid');
    }
    if (phone.value.match(/^777[\d/g]/) && phone.value.length == 9) {
        if (phone.classList.contains('novalid')) {
            phone.classList.remove('novalid')
        }
        phone.classList.add('valid')
    } else {
        if (phone.classList.contains('valid')) {
            phone.classList.remove('valid');
        }
        phone.classList.add('novalid')
    }
    if (url.value.match(validateURL)) {
        if (url.classList.contains('novalid')) {
            url.classList.remove('novalid')
        }
        url.classList.add('valid')
    } else {
        if (url.classList.contains('valid')) {
            url.classList.remove('valid');
        }
        url.classList.add('novalid');
    }
    if (message.value.length > 20) {
        if (message.classList.contains('novalid')) {
            message.classList.remove('novalid')
        }
        message.classList.add('valid')
    } else {
        if (message.classList.contains('valid')) {
            message.classList.remove('valid');
        }
        message.classList.add('novalid');
    }
});
