/*===================== SHOW MENU ================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ========= MENU SHOW ========== */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

/* =============== MENU HIDDEN ================= */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ============== REMOVE MENU MOBILE ==============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ============================== SHADOW HEADER ========================== */
const shadowHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header') 
}
window.addEventListener('scroll', shadowHeader)

/* =========================================== EMAIL JS ==================================== */
// const contactForm = document.getElementById('contact-form'),
//       contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) =>{
//     e.preventDefault()
// }

// contactForm.addEventListener('submit', sendEmail)
