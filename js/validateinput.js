const validateEmail = () => {
  const emailInput = document.getElementById('email').value;
  const errorMessage = document.querySelector('.error-message');

  errorMessage.innerText =
    emailInput === emailInput.toLowerCase() ? '' : '*Email must be in lowercase.';
};

document.querySelector('.contact-get-in-touch-button').addEventListener('click', validateEmail);
