let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');
}

let loginFrom = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginFrom.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginFrom.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');
}


