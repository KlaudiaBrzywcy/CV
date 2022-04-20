let typedElement = new Typed('.typed', {
    strings: ['Junior Front-end developer', 'Clinical dietitian'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50
})

let arrowTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    let windowOffset = window.pageYOffset;
    if (windowOffset > 0) {
        arrowTop.classList.add('show')
    } else {
        arrowTop.classList.remove('show')
    }

})

let hamburgerButton = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {

    hamburgerButton.classList.toggle('active');

    navigation.classList.toggle('menu-open');

})

let navigationLinks = document.querySelectorAll('.menu li a');
navigationLinks.forEach((item) => {
    item.addEventListener('click', () => {
        hamburgerButton.classList.toggle('active');

        navigation.classList.toggle('menu-open');
    })
})




let switcher = document.querySelector('.switcher');
let body = document.body
switcher.addEventListener('click', (event) => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
        body.classList.add('light')
        localStorage.setItem('theme', 'dark')
    }
    else {
        body.classList.remove('light')
        body.classList.add('dark')
    }

    event.preventDefault()
})

let storedTheme = localStorage.getItem('theme');

if (storedTheme) {
    body.classList.remove('dark', 'light');
    body.classList.add(storedTheme)
}

AOS.init();

let parallax = new Parallax(document.querySelector('.parallax'), {
    relativeInput: true
})

const eduDiv1 = document.querySelector('.ed1');
const eduDiv2 = document.querySelector('.ed2');
const eduDiv3 = document.querySelector('.ed3');
const jobDiv1 = document.querySelector('.jb1');
const jobDiv2 = document.querySelector('.jb2');
const jobDiv3 = document.querySelector('.jb3');

const listOfDivs = [eduDiv1, eduDiv2, eduDiv3, jobDiv1, jobDiv2, jobDiv3]

const showDivs = () => {

    listOfDivs.forEach(div => {
        div.style.visibility = 'visible';
        div.style.bottom = '0px';


    }
    )
}

window.addEventListener('scroll', showDivs)

let reactSpan = document.querySelector('.react')

