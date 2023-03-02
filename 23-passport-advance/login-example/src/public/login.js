console.log('login vista');

const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('/api/session/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      window.alert(`Bievenido ${data.user.first_name}`);
    })
    .catch((err) => {
      window.alert('Error al iniciar sesion');
    });
});
