let formLogin = document.querySelector('.header .form-login');

document.querySelector('#login-btn').onclick = () => {
    formLogin.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    formLogin.classList.remove('active');
}

window.onscroll = () => {
    formLogin.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 50) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    if(window.scrollY == 0) {
        document.querySelector('.scroll-top').classList.add('active');
    } else {
        document.querySelector('.scroll-top').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 50) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}