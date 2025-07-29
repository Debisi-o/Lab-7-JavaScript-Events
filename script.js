// Mouse Events
const hoverBtn = document.getElementById('hoverBtn');
const hoverMsg = document.getElementById('hoverMsg');

hoverBtn.addEventListener('mouseenter', () => {
    hoverMsg.textContent = "You're hovering!";
});

hoverBtn.addEventListener('mouseleave', () => {
    hoverMsg.textContent = "You left the button!";
});
// Keyboard Events
const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keydown', (e) => {
    keyMsg.textContent = `You pressed: ${e.key}`;
});
// Form Events
const form = document.getElementById('demoForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = "Form submitted successfully!";
});