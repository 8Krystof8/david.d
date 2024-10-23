// Interaktivní tlačítko "Zjistit více"
document.getElementById('learn-more').addEventListener('click', function() {
    alert('Vítejte na mé stránce o hardwaru!');
});

// Interaktivní tlačítka pro projekty
const projectButtons = document.querySelectorAll('.project-btn');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Více informací o tomto projektu bude brzy dostupných.');
    });
});

// Validace a odeslání formuláře
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Děkujeme za zprávu! Ozveme se vám co nejdříve.');
    this.reset();
});
