const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// Modal Itens
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main__btn');
const closeBtn = document.querySelector('.close-btn');


// Click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});


// Form Validation Modal
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');


// Show Error
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}


// Show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}


// Check required fiels
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    });
}

// Get fieldName

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);
});