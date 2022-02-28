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
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senhaConfirm = document.getElementById('senha-confirm');


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
            showError(input, `${getFieldName(input)} é obrigatório`);
        } else {
            showValid(input);
        }
    });
}

// Check passwords match
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'A senhas fornecidas não são iguais');
    }
}

// Get fieldName
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} deve conter no mínimo ${min} caracteres`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} deve conter até ${max} caracteres`);
    } else {
        showValid(input);
    }
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([nome, email, senha, senhaConfirm]);
    checkLength(nome, 3, 30);
    checkLength(senha, 8, 25);
    checkLength(senhaConfirm, 8, 25);
    passwordMatch(senha, senhaConfirm);
});