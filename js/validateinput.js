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

  if (!fullName.trim() && (!firstName.trim() || !lastName.trim())) {
    displayErrorMessage(document.getElementById('fname'));
    isValid = false;
  } else if (!fullName.trim() && (firstName.trim() || lastName.trim())) {
    formData.set('fname', `${firstName} ${lastName}`);
  }

  formData.forEach((value, key) => {
    const field = document.getElementById(key);

    if (key === 'fname' && value.trim()) {
      return;
    }

    if (key === 'fname' && !value.trim() && (!firstName.trim() || !lastName.trim())) {
      displayErrorMessage(document.getElementById('fname'), 'Full name is required');
      isValid = false;
    } else if ((key === 'firstname' || key === 'lastname') && !value.trim() && !fullName.trim()) {
      displayErrorMessage(field, `${key} is required`);
      isValid = false;
    } else if (key === 'email' && value.trim() !== value.toLowerCase()) {
      displayErrorMessage(field, 'Email should be in lowercase');
      emailValid = false;
    } else if (key !== 'fname' && key !== 'firstname' && key !== 'lastname' && !value.trim()) {
      displayErrorMessage(field, `${key} is required`);
      isValid = false;
    }
  });

  if (isValid && emailValid) {
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
