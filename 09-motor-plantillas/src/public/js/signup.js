//TODO: hacer fetch a la api para verificar el login

const form = document.getElementById('formUser');


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(documentemail.get)
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    try {
        await fetch('/api/signup', {
            method: 'POST',
            headers: new Headers().append('Content-Type', 'application/json'),
            body: JSON.stringify({
                email,
                password,
                name
            }),
        })
        alert('Usuario Registrado');
    } catch (error) {
        alert('Error al Registrar usuario')
    }

 })