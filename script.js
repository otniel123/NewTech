// Scroll suave ao clicar no menu
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
    // Rolando para baixo - diminuir navbar e seu conteúdo
    navbar.style.height = "60px";  // Diminui a altura da barra de navegação
    navList.style.top = "59px";
    

    ctaButton.style.padding = "5px 10px";  // Diminui o padding do botão CTA
    ctaButton.style.fontSize = "14px";  // Diminui o tamanho da fonte do botão CTA
    if (navList.classList.contains('show-menu')) {
        navbar.style.height = "100px";
        navList.style.top = "101px"; }
  } 


  else {
    // Rolando para cima - restaurar navbar e seu conteúdo
    navbar.style.height = "100px";  // Restaurar a altura da barra de navegação
    logoText.style.fontSize = "26px";  // Restaurar o tamanho da logo
    navLinks.forEach(link => link.style.fontSize = "16px");  // Restaurar o tamanho dos links do menu
    ctaButton.style.padding = "10px 20px";  // Restaurar o padding do botão CTA
    ctaButton.style.fontSize = "16px";  // Restaurar o tamanho da fonte do botão CTA
  }

  lastScrollTop = scrollTop;
});

// Texto a ser digitado
const text = "A melhor loja de informática de blumenau. simplesmente, newtech!";
const speed = 45;  // Velocidade da digitação (em milissegundos)

let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);  // Chama a função de novo até terminar
    }
}

// Inicia o efeito de digitação ao carregar a página
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
    history.scrollRestoration = 'manual'; // Desativa o comportamento padrão de restaurar o scroll
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0); // Força o scroll para o topo antes de recarregar
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


