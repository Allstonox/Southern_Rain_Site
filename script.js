//Code for header nav menu

const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeMenu = document.querySelector("#close-menu");
const headerNav = document.querySelector("#header-nav");

hamburgerMenu.addEventListener("click", () => {
    headerNav.classList.toggle("active");
    hamburgerMenu.style.display = 'none';
    closeMenu.style.display = 'inline';
});

closeMenu.addEventListener("click", () => {
    headerNav.classList.toggle("active");
    hamburgerMenu.style.display = 'inline';
    closeMenu.style.display = 'none';
});

//Code for toggling display for services tab

const servicesNav = document.querySelector('#services-nav')
const requestServicesNav = document.querySelector('#request-service-nav')

function toggleActive(active) {
    if(servicesNav.style.display === '' && active) {
        servicesNav.style.display = 'inline';
    }
    else if(!active) {
        servicesNav.style.display = '';
    }
}

document.addEventListener('click', (event) => {
    // console.log('window clicked');
    if(event.target != requestServicesNav & event.target.parentElement.parentElement != servicesNav) {
        console.log(event.target);
        console.log(event.target.parentElement);
        if(servicesNav.style.display === 'inline') {
            servicesNav.style.display = '';
        }
    }
})

//Code for rain animation

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];
let rainAmount = 50;

function createRain() {
    if (raindrops.length < rainAmount) {
        raindrops.push(
            new Rain({
                position: {
                    x: Math.floor(Math.random() * canvas.width),
                    y: -20
                },
                length: 10 + (Math.random() * 60)
            }))
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < raindrops.length; i++) {
        raindrops[i].update();
    }
    if (raindrops.length < rainAmount) {
        createRain();
    }
}

createRain();
animate();