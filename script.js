// Header Scroll
let header = document.querySelector('.header');
let title_profilo = document.getElementById('title_profilo');
let title_name = document.getElementById('title_name');
window.addEventListener('scroll',function(){
    if(window.scrollY > 200) {
        header.classList.add('nav_scroll');
        title_profilo.classList.add('d-none');
        title_name.classList.remove('d-none');
    } else {
        header.classList.remove('nav_scroll');
        title_profilo.classList.remove('d-none');
        title_name.classList.add('d-none');
    }
})

// SetTimeout Light
let light = document.querySelector('.hero_light');
setTimeout(function() {
    light.classList.add('light_on');
    light.classList.remove('light_off');
},1500)

// SetTimeout name 
let name = document.querySelector('.name_matteo_morganti');
let prof = document.querySelector('.profession_text');
setTimeout(function(){
    name.classList.add('opacity_show');
    name.classList.remove('opacity')
}, 800);
setTimeout(function(){
    prof.classList.add('opacity_show');
    prof.classList.remove('opacity')
}, 1100)




// Scroll reveal init
ScrollReveal().reveal('.reveal', {
    distance: '50px', 
    duration: 1500,
    easing: 'cubic-bezier(.215, .61, .355, 1)',
    interval: 500,
    delay: 300
});