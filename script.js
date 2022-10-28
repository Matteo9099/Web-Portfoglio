// Header Scroll
let header = document.querySelector('.header');
window.addEventListener('scroll',function(){
    if(window.scrollY > 200) {
        header.classList.add('nav_scroll');
    } else {
        header.classList.remove('nav_scroll');
    }
})

// SetTimeout name 
let name = document.querySelector('.name_matteo_morganti');
setTimeout(function(){
    name.classList.add('opacity_show');
    name.classList.remove('opacity')
}, 800);


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


