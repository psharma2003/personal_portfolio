
//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let  navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sec
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
 
window.onscroll=()=>{
    sections.forEach(sec =>{
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;

    let id=sec.getAttribute('id');


    if(top>=offset && top<offset+height){
    //active navbar links
    navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
  })
}
 });
        //sticky header
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


const textSpan = document.querySelectorAll('.text-animate h3 span');
let index = 0;

function typingEffect() {
    if (index < textSpan.length) {
        textSpan[index].classList.add('typing');
        index = (index + 1) % textSpan.length; // Reset index when it reaches the end
        setTimeout(typingEffect, 200); // Adjust typing speed (milliseconds)
    }
}

typingEffect();

















