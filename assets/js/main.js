const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200) nav.classList.add('scrolheader'); else nav.classList.remove('scrolheader')
}
window.addEventListener('scroll', scrollHeader)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .container, .contact__button, .footer__social,
            .footer__content`, {
    interval: 100
})

var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        speed: 500,
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        },
});



// timeline events
gsap.from(".event", {
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    x: (index) => index % 2 === 0 ? -50 : 50,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out"
});

function onMouseEnter() {
    document.querySelector('.pin-content').style.transform = 'rotateX(40deg) scale(0.8)';
  }
  
  function onMouseLeave() {
    document.querySelector('.pin-content').style.transform = 'rotateX(0deg) scale(1)';
  }


  const coffeeMenu = [
    {
        name: "Caffe Latte",
        description: "Rich, full-bodied espresso in steamed milk, lightly topped with foam.",
        price: "$3.95",
        image: "assets/img/Caffee latte.jpg"
    },
    {
        name: "Cappuccino",
        description: "Espresso with steamed milk, topped with a deep layer of foam.",
        price: "$3.95",
        image: "assets/img/Cappuccino.jpg"
    },
    {
        name: "Caramel Macchiato",
        description: "Freshly steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        price: "$4.45",
        image: "assets/img/Caramel macchiato.jpg"
    },
    {
        name: "Americano",
        description: "Espresso shots topped with hot water to produce a light layer of crema.",
        price: "$2.95",
        image: "assets/img/Americano.jpg"
    },
    {
        name: "Mocha",
        description: "Espresso with bittersweet mocha sauce and steamed milk, topped with whipped cream.",
        price: "$4.15",
        image: "assets/img/Mocha.jpg"
    },
    {
        name: "Flat White",
        description: "Ristretto shots of espresso with steamed whole milk, perfect microfoam.",
        price: "$3.95",
        image: "assets/img/Flat White.jpg"
    }
  ];
  
  function createCoffeeItem(coffee) {
    const coffeeElement = document.createElement('div');
    coffeeElement.classList.add('coffee-item');
    coffeeElement.innerHTML = `
        <img src="${coffee.image}" alt="${coffee.name}">
        <h3>${coffee.name}</h3>
        <p>${coffee.description}</p>
        <span class="price">${coffee.price}</span>
    `;
    return coffeeElement;
  }
   
  function loadCoffeeMenu() {
    const menuContainer = document.querySelector('.menu-container');
    coffeeMenu.forEach(coffee => {
        const coffeeItem = createCoffeeItem(coffee);
        menuContainer.appendChild(coffeeItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadCoffeeMenu);
