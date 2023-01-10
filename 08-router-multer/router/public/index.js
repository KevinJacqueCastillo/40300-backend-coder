

const form = document.getElementById("formPets")

form.addEventListener('submit',async  (e) => {
    e.preventDefault();
    const inputPet = document.getElementById('name-pet').value;
    console.log(inputPet)
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    try {
        const resp = await fetch('/api/pets', {
            method: 'post',
            headers: headers,
            
            body: JSON.stringify({
                pet:inputPet
            })
        }).then((res)=>res.json())
        window.alert(resp.msg);
    } catch (error) {
        console.error(error)
    }
})