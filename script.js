// Funkce pro plynulé posouvání na sekci
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Funkce pro zobrazení tlačítka "Nahoru"
window.addEventListener('scroll', function() {
    let backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Funkce pro plynulý posun nahoru
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animace načítání dovedností
window.onload = function() {
    let skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(function(bar) {
        bar.style.setProperty('--percent', bar.getAttribute('data-percent'));
    });
};
