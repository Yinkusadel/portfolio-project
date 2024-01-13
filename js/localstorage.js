const localStorageKey = 'portfolio-project.git';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.customerContactsForm;

  form.addEventListener('change', () => {
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);

    const inputsToString = JSON.stringify(obj);
    localStorage.setItem(localStorageKey, inputsToString);
  });

  const storedData = localStorage.getItem(localStorageKey);

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

export default localStorageKey;
