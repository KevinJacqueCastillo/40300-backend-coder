const socket = io();
let user;

Swal.fire({
  title: 'Para comenzar primero debes identeficarte',
  input: 'text',
  inputLabel: 'Ingresa tu nombre',
  inputPlaceholder: 'Ingresa tu nombre',

  inputValidator: (value) => {
    if (!value) {
      return 'Debes ingresar tu nombre';
    }
    user = value;
  },
  allowOutsideClick: false,
}).then((result) => {
  socket.on('new-user', (data) => {
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido Nuevo usuario',
      text: `Bienvenido ${data.user} al chat`,
      toast: true,
      position: 'top-end',
    });
  });
  socket.emit('new-user', { user: result.value });
  user = result.value;
});
console.log('hola mundo desde cliente');
const chat = document.getElementById('chatBox');

chat.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.key === 'Enter' && e.target.value !== '') {
    console.log(e.target.value);
    e.preventDefault();
    const message = e.target.value;
    const data = {
      message,
      user,
    };
    socket.emit('message', data);
    e.target.value = '';
  }
});

socket.on('message', (data) => {
  let log = document.getElementById('messagelogs');
  log.innerHTML += `<div style="display:flex; justify-content:${
    data.user == user ? 'end' : 'start'
  }"><p style="background-color:#dcf8c6;width: fit-content;padding: 10px;border-radius: 5px;">${
    data.user
  }: ${data.message}</p></div>`;
});

socket.on('message-history', (data) => {
  let log = document.getElementById('messagelogs');
  log.innerHTML = '';
  data.forEach((message) => {
    log.innerHTML += `<div style="display:flex; justify-content:${
      message.user == user ? 'end' : 'start'
    }"><p style="background-color:#dcf8c6;">${message.user}: ${
      message.message
    }</p></div>`;
  });
});
