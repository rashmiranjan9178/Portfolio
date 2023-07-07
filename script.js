var typed = new Typed('#hero', {
    strings: ['Welcome to my Portfolio', 'Have a good day','Hope you are doing well','Have a good Look',"RASMI'S PORTFOLIO"],
    typeSpeed: 100,
});

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Video Editior'],
    typeSpeed: 50,
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header')

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    // rest: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box,.contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content', {origin:'right'});
