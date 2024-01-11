document.addEventListener('DOMContentLoaded', () => {
  const form = document.customerContactsForm;

  form.addEventListener('change', () => {
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);

    const inputsToString = JSON.stringify(obj);
    localStorage.setItem('portfolio-project.git', inputsToString);
  });

  const storedData = localStorage.getItem('portfolio-project.git');

  if (storedData) {
    const parsedData = JSON.parse(storedData);

    Object.keys(parsedData).forEach((key) => {
      const inputField = document.querySelector(`[name="${key}"]`);
      if (inputField) {
        inputField.value = parsedData[key];
      }
    });
  }
});
