const displayErrorMessage = (field, message) => {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;

  field.parentNode.insertBefore(errorMessage, field.nextSibling);
};

const form = document.getElementById('customer-contacts-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

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
    } else if (
      (key === 'fname' || key === 'firstname' || key === 'lastname') &&
      !value.trim() &&
      !isFullNameErrorDisplayed
    ) {
      displayErrorMessage(document.getElementById('fname'), 'Full name is required');
      isValid = false;
      isFullNameErrorDisplayed = true;
    } else if (key !== 'fname' && key !== 'firstname' && key !== 'lastname' && !value.trim()) {
      displayErrorMessage(field, `${key} is required`);
      isValid = false;
      errorMessages.add(`${key} is required`);
    }
  });

  if (isValid) {
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
