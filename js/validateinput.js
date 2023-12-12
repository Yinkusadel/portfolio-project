const validateEmail = (event) => {
  const emailInput = document.getElementById('email').value;
  const errorMessage = document.querySelector('.error-message');

  if (emailInput !== emailInput.toLowerCase()) {
    errorMessage.innerText = '*Email must be in lowercase.';
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
  let skipValidation = false;

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text' && isHidden(inputs[i])) {
      skipValidation = true;
      break;
    }

    if (inputs[i].value.trim() === '') {
      alert('Please fill in all fields');
      return false;
    }
  }

  if (skipValidation) {
    return true;
  }

  alert('Form submitted successfully!');
  return true;
};

document.querySelector('.customer-contacts-form').onsubmit = function () {
  return validateForm();
};
