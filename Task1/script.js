
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data,.contact__input',{interval: 200}); 

function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const timelineSections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;
const scrollSpeed = 2; 

function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();

    const dist = targetY - timelineRect.top;

    if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
    }

    if (up && full && set > 0) {
        set = Math.max(0, set - scrollSpeed);
        line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist < timeline.offsetHeight + 50 && full && set > 0) {
        set = Math.max(0, set - scrollSpeed);
        line.style.bottom = `calc(100% - ${set}px)`;
        if (set === 0) {
            full = false;
            line.style.bottom = `calc(100% - 20px)`;
        }
    }

    timelineSections.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (down && rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
        }
        if (up && rect.top + item.offsetHeight / 5 >= targetY) {
            item.classList.remove('show-me');
        }
    });

    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);

    document.addEventListener('DOMContentLoaded', function () {
        var options = {
            strings: [' ','Web Developer','Wella :)'],
            typeSpeed: 80,  
            backSpeed: 50,    
            backDelay: 1000,  
            loop: true       
        };

        var typed = new Typed('.typing', options);
    });

