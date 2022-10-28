// Header Scroll
let header = document.querySelector('.header');
let title_profilo = document.getElementById('title_profilo');
let title_name = document.getElementById('title_name');
window.addEventListener('scroll',function(){
    if(window.scrollY > 200) {
        header.classList.add('nav_scroll');
        title_profilo.classList.add('opacity');
        title_name.classList.remove('opacity');
    } else {
        header.classList.remove('nav_scroll');
        title_profilo.classList.remove('opacity');
        title_name.classList.add('opacity');
    }
})


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


// SetTimeout image 
let img = document.querySelector('.image_matteo_morganti');
setTimeout(function(){
    img.classList.add('image_show');
    img.classList.remove('image_none');
},1300);

// Scroll image opacity
window.addEventListener('scroll', function(){
    if(window.scrollY > 400) {
        img.classList.add('image_fade_out');
    } else{
        img.classList.remove('image_fade_out');
    }
})





// Scroll reveal init
ScrollReveal().reveal('.reveal', {
    distance: '50px', 
    duration: 1500,
    easing: 'cubic-bezier(.215, .61, .355, 1)',
    interval: 500,
    delay: 300
});