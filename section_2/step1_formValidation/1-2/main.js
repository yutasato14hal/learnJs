const form = document.getElementById('myForm');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    let errors = [];

    if (username.length < 3) {
      errors.push('Username must be at least 3 characters long.');
    }

    if (!email.includes('@')) {
      errors.push('Invalid email address.');
    }

    if (errors.length > 0) {
      errorMessage.textContent = errors.join(' ');
    } else {
      errorMessage.textContent = '';
      alert('Form submitted successfully!');
    }
  });