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

  if ((firstName.trim() && !lastName.trim()) || (!firstName.trim() && lastName.trim())) {
    displayErrorMessage(
      document.getElementById('fname'),
      'Both First name and Last name are required to create Full name',
    );
    return;
  }

  if (firstName.trim() && lastName.trim()) {
    formData.set('fname', `${firstName} ${lastName}`);
  }

  let isValid = form.checkValidity();

  if (isValid) {
    form.submit();
    return;
  }

  const errorMessages = new Set();

  formData.forEach((value, key) => {
    const field = document.getElementById(key);

    if (key === 'fname' && value.trim()) {
      return;
    }

    if ((key === 'fname' || key === 'firstname' || key === 'lastname') && !value.trim()) {
      displayErrorMessage(field, `${key === 'fname' ? 'Full name' : key} is required`);
    } else if (key === 'email' && value.trim() !== value.toLowerCase()) {
      displayErrorMessage(field, 'Email should be in lowercase');
      isValid = false;
    } else if (key !== 'fname' && key !== 'firstname' && key !== 'lastname' && !value.trim()) {
      displayErrorMessage(field, `${key} is required`);
      errorMessages.add(`${key} is required`);
    }
  });

  if (errorMessages.size === 0) {
    form.submit();
  }
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
