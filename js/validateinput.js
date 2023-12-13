const fillFieldErrorMessage = document.querySelector('.fill-field-error-message');

const validateEmail = (event) => {
  const emailInput = document.getElementById('email').value;
  const errorMessage = document.querySelector('.error-message');

  if (emailInput !== emailInput.toLowerCase()) {
    errorMessage.innerText = '*Email must be in lowercase.';
    fillFieldErrorMessage.innerText = '';
    event.preventDefault();
  } else {
    errorMessage.innerText = '';
  }
};

document.querySelector('.contact-get-in-touch-button').addEventListener('click', validateEmail);

const isHidden = (element) => {
  return element.offsetWidth === 0 && element.offsetHeight === 0;
};

const validateForm = () => {
  const inputs = document.querySelectorAll('.customer-contacts-form input');

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text' && isHidden(inputs[i])) {
      fillFieldErrorMessage.innerText = '';
    } else {
      if (inputs[i].value.trim() === '') {
        fillFieldErrorMessage.innerText = '*Please fill in all fields.';
        return false;
      }
      fillFieldErrorMessage.innerText = '';
    }
  }

  return true;
};

document.querySelector('.customer-contacts-form').addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});
