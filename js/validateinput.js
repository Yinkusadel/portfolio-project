const displayErrorMessage = (field, message) => {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;

  field.parentNode.insertBefore(errorMessage, field.nextSibling);
};

const form = document.getElementById('customer-contacts-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  document.querySelectorAll('.error-message').forEach((el) => el.remove());

  const formData = new FormData(form);

  const firstName = formData.get('firstname');
  const lastName = formData.get('lastname');
  const fullName = formData.get('fname');

  let isValid = true;
  let emailValid = true;

  const isMobileView = window.innerWidth <= 767;

  if (!fullName.trim() && (!firstName.trim() || !lastName.trim()) && isMobileView) {
    displayErrorMessage(document.getElementById('fname'));
    isValid = false;
  } else if (!fullName.trim() && firstName.trim() && lastName.trim() && !isMobileView) {
    formData.set('fname', `${firstName} ${lastName}`);
  }

  formData.forEach((value, key) => {
    const field = document.getElementById(key);

    if (key === 'fname' && value.trim()) {
      return;
    }

    if (
      key === 'fname' &&
      !value.trim() &&
      (!firstName.trim() || !lastName.trim()) &&
      isMobileView
    ) {
      displayErrorMessage(document.getElementById('fname'), 'Full name is required');
      isValid = false;
    } else if (
      (key === 'firstname' || key === 'lastname') &&
      !value.trim() &&
      !fullName.trim() &&
      !isMobileView
    ) {
      displayErrorMessage(field, `${key === 'firstname' ? 'First' : 'Last'} name is required`);
      isValid = false;
    } else if (key === 'email' && value.trim() !== value.toLowerCase()) {
      displayErrorMessage(field, 'Email should be in lowercase');
      emailValid = false;
    } else if (key === 'text-here' && !value.trim()) {
      displayErrorMessage(field, 'Email body is required');
      isValid = false;
    } else if (key === 'email' && !value.trim()) {
      displayErrorMessage(field, 'Email is required');
      isValid = false;
    } else if (
      key !== 'fname' &&
      key !== 'firstname' &&
      key !== 'lastname' &&
      !value.trim() &&
      !isMobileView
    ) {
      displayErrorMessage(field, `${key} is required`);
      isValid = false;
    }
  });

  if (isValid && emailValid) {
    form.submit();
  }
});

const clearInputData = (isMobileView) => {
  if (isMobileView) {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
  } else {
    document.getElementById('fname').value = '';
  }
};

const clearErrors = () => {
  document.querySelectorAll('.error-message').forEach((el) => el.remove());
};

const clearFormAndErrors = (isMobileView) => {
  clearInputData(isMobileView);

  clearErrors();
};

let isMobileView = window.innerWidth <= 767;

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;
  const isCurrentMobileView = currentWidth <= 767;

  if (isCurrentMobileView !== isMobileView) {
    clearFormAndErrors(isCurrentMobileView);
  }

  isMobileView = isCurrentMobileView;
});
