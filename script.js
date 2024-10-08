
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let lastScrollTop = 0;
const navbar = document.querySelector("header");
const logoText = document.querySelector(".logo h1");
const navLinks = document.querySelectorAll(".nav-list a");
const ctaButton = document.querySelector(".cta-header");
const menu = document.querySelector(".nav-list show-menu")
const navList = document.querySelector('.nav-list');

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    
    navbar.style.height = "60px";  
    navList.style.top = "59px";
    

    ctaButton.style.padding = "5px 10px";  
    ctaButton.style.fontSize = "14px";  
    if (navList.classList.contains('show-menu')) {
        navbar.style.height = "100px";
        navList.style.top = "101px"; }
  } 


  else {
    
    navbar.style.height = "100px";  
    logoText.style.fontSize = "26px";  
    navLinks.forEach(link => link.style.fontSize = "16px");  
    ctaButton.style.padding = "10px 20px";  
    ctaButton.style.fontSize = "16px";  
  }

  lastScrollTop = scrollTop;
});


const text = "A melhor loja de informática de blumenau. simplesmente, newtech!";
const speed = 45;  

let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);  
    }
}


window.onload = function() {
    typeEffect();
    
};


document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  function checkScroll() {
      fadeInElements.forEach(function(element) {
          const position = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (position < screenPosition) {
              element.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
});

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual'; 
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0); 
};

const mobileMenu = document.getElementById('mobile-menu');


mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('show-menu');
    
});


const mobileItem = document.querySelector('.Item') 

mobileItem.addEventListener('click', () => {
    navList.classList.remove('show-menu');
    
});

const mobileItem1 = document.querySelector('.Item1') 

mobileItem1.addEventListener('click', () => {
    navList.classList.remove('show-menu');
    
});
const mobileItem2 = document.querySelector('.Item2') 

mobileItem2.addEventListener('click', () => {
    navList.classList.remove('show-menu');
    
});
const mobileItem3 = document.querySelector('.Item3') 

mobileItem3.addEventListener('click', () => {
    navList.classList.remove('show-menu');
    
});


