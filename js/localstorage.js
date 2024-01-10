document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('change', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);

    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);
  });

  const storedData = localStorage.getItem('form');

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
