const form = document.getElementById('customer-contacts-form');
const output = document.getElementById('fill-field-error-message');

const displayErrorMessage = (field, message) => {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;

  field.insertAdjacentElement('afterend', errorMessage);
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  output.textContent = '';
  document.querySelectorAll('.error-message').forEach((el) => el.remove());

  let isValid = true;
  const isFirstNameEmpty = !formData.get('firstname');
  const isLastNameEmpty = !formData.get('lastname');
  let isFullNameErrorDisplayed = false;

  if (!formData.get('fname') && !isFirstNameEmpty && !isLastNameEmpty) {
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    formData.set('fname', `${firstName} ${lastName}`);
  }

  const errorMessages = new Set();

  formData.forEach((value, key) => {
    const field = document.getElementById(key);

    if (key === 'email' && value.trim() !== value.toLowerCase()) {
      displayErrorMessage(field, 'Email should be in lowercase');
      isValid = false;
    } else if (key === 'fname' && !value.trim() && isFirstNameEmpty && isLastNameEmpty) {
      if (!isFullNameErrorDisplayed) {
        displayErrorMessage(field, 'Full name is required');
        isValid = false;
        isFullNameErrorDisplayed = true;
      }
    } else if (key === 'firstname' && value.trim() && isLastNameEmpty) {
      displayErrorMessage(document.getElementById('fname'), 'Full name is required');
      isValid = false;
    } else if (key === 'lastname' && value.trim() && isFirstNameEmpty) {
      displayErrorMessage(document.getElementById('fname'), 'Full name is required');
      isValid = false;
    } else if (key !== 'fname' && key !== 'firstname' && key !== 'lastname' && !value.trim()) {
      displayErrorMessage(field, `${key} is required`);
      isValid = false;
      errorMessages.add(`${key} is required`);
    } else {
      output.textContent += `${key}: ${value}\n`;
    }
  });

  if (isValid) {
    output.textContent = '';
  } else {
    output.textContent = Array.from(errorMessages).join('\n');
  }
});
