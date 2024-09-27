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

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo - diminuir navbar e seu conteúdo
    navbar.style.height = "60px";  // Diminui a altura da barra de navegação
    //logoText.style.fontSize = "18px";  // Diminui o tamanho da logo
    //navLinks.forEach(link => link.style.fontSize = "14px");  // Diminui o tamanho dos links do menu
    ctaButton.style.padding = "5px 10px";  // Diminui o padding do botão CTA
    ctaButton.style.fontSize = "14px";  // Diminui o tamanho da fonte do botão CTA
  } else {
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
const text = "Desbloqueie o Potencial da Sua Loja de Informática";
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