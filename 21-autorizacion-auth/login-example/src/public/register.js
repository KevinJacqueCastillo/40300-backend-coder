console.log('hola desde registro');

const formRegister = document.getElementById('formRegister');
const first_name = document.getElementById('firstName');
const last_name = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/api/session/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      age: age.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      window.alert(`Usuario creado`);
      window.location.href = '/';
    })
    .catch((err) => {
      window.alert('Error al crear usuario');
    });
});
