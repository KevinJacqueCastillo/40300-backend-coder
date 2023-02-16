console.log('hola mundo');

const form = document.getElementById('formCookie');
const buttonGetCookie = document.getElementById('getCookie');
const cookies = document.getElementById('cookies');
const name = document.getElementById('name');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/setCookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
    }),
  });

  console.log({
    name: name.value,
    email: email.value,
  });
});

buttonGetCookie.addEventListener('click', () => {
  fetch('/getCookie')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cookies.innerText = JSON.stringify(data, null, 2);
    });
});
