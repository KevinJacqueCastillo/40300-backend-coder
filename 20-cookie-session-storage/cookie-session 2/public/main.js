console.log('first');
const form = document.getElementById('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const buttonGetCookie = document.getElementById('buttonGetCookie');
const cookies = document.getElementById('cookies');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/setCookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name.value, email: email.value }),
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
