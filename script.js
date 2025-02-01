const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const newsletterCont = document.querySelector('.container');
const msgContainer = document.querySelector('.msg-container');

const dismissBtn = document.getElementById('dismissBtn');


const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailPattern.test(emailValue) && emailValue !== '') {
        emailInput.classList.remove('error-state');
        emailError.style.display = 'none';
        emailInput.value = '';

        newsletterCont.style.display = 'none';
        msgContainer.style.display = 'flex';

    } else if (emailValue !== '' && !emailPattern.test(emailValue)) {
        emailInput.classList.add('error-state');
        emailError.style.display = 'block';
        
    } else if (emailValue === '') {
        emailInput.classList.remove('error-state');
        emailError.style.display = 'none';
    }
});

dismissBtn.addEventListener('click', function () {
    msgContainer.style.display = 'none';
    newsletterCont.style.display = 'grid';
    emailInput.classList.remove('error-state');
    emailError.style.display = 'none';
});
