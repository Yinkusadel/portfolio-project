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
  } else if (!fullName.trim() && (firstName.trim() || lastName.trim()) && !isMobileView) {
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
    } else if (key === 'email' && !value.trim() && isMobileView) {
      displayErrorMessage(field, 'Email is required');
      isValid = false;
    } else if (
      key !== 'fname' &&
      key !== 'firstname' &&
      key !== 'lastname' &&
      key !== 'emailbody' &&
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
    document.getElementById('fname').value = '';
    document.getElementById('text-here').value = '';
    document.getElementById('email').value = '';
  } else {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('text-here').value = '';
    document.getElementById('email').value = '';
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

// let formSubmission = document.getElementById("customer-contacts-form");
// async function handleSubmit(event) {
// event.preventDefault();
// let status = document.getElementById("fill-field-error-message");
// let data = new FormData(event.target);
// fetch(event.target.action, {
//   method: formSubmission.method,
//   body: data,
//   headers: {
//     'Accept': 'application/json'
// }
// }).then(response => {
//   if (response.ok) {
//     status.innerHTML = "Thanks for your submission!";
//     formSubmission.reset()
//   } else {
//     response.json().then(data => {
//     if (Object.hasOwn(data, 'errors')) {
//       status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//     } else {
//       status.innerHTML = "Oops! There was a problem submitting your form"
//     }
//   })
// }
// }).catch(error => {
//   status.innerHTML = "Oops! There was a problem submitting your form"
// });
// }
// formSubmission.addEventListener("submit", handleSubmit)
