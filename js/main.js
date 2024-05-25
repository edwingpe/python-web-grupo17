const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') 
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute('data-overlay');
})


// Validación del formulario
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('formularioContacto');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        const fields = form.querySelectorAll('input, select');
        fields.forEach((field) => {
            if (!field.checkValidity()) {
                isValid = false;
                field.classList.add('invalid');
            } else {
                field.classList.remove('invalid');
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Por favor, complete todos los campos obligatorios.');
        }
    });