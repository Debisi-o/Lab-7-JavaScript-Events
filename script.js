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
// Focus and Blur Events
const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.addEventListener('focus', () => {
    focusMsg.textContent = "Input is focused!";
});

focusInput.addEventListener('blur', () => {
    focusMsg.textContent = "Input lost focus!";
});

// Event Delegation
const btnContainer = document.getElementById('btnContainer');
const delegationMsg = document.getElementById('delegationMsg');

btnContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        delegationMsg.textContent = `You clicked: ${e.target.textContent}`;
    }
});
