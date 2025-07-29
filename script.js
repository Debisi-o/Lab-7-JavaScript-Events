// Mouse Events
const hoverBtn = document.getElementById('hoverBtn');
const hoverMsg = document.getElementById('hoverMsg');

hoverBtn.addEventListener('mouseenter', () => {
    hoverMsg.textContent = "You're hovering!";
});

hoverBtn.addEventListener('mouseleave', () => {
    hoverMsg.textContent = "You left the button!";
});