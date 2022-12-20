const fs = require('fs')


class UserManager{

    constructor() {
        
    }
    #pathFileUsers = './assets/Usuarios.json';


    async createUser (name,lastname,age,course) {
        try {

            if (fs.existsSync(this.#pathFileUsers)) {
                const users = await fs.promises.readFile(this.#pathFileUsers,'utf-8');
                const arrayUsers = JSON.parse(users);
                await fs.promises.writeFile(this.#pathFileUsers,JSON.stringify([...arrayUsers,{name,lastname,age,course}]))
            } else {
                await fs.promises.writeFile(this.#pathFileUsers,JSON.stringify([{name,lastname,age,course}]))
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getUsers() {
        if (fs.existsSync(this.#pathFileUsers)) { 
            const users = await fs.promises.readFile(this.#pathFileUsers,'utf-8');
            const arrayUsers = JSON.parse(users);
            return arrayUsers;
        } else {
            console.log('no existe archivo usuarios')
            return []
        }
    }
}


(async ()=>{ 
    const users = new UserManager()
    await users.createUser('kevin','jacque',24,'40300')
    await users.createUser('a','jacque',24,'40300')
    await users.createUser('b','jacque',24,'40300')
    await users.createUser('c','jacque',24,'40300')
})


const consultar = async () => {
    const users = new UserManager();
        const resp = await users.getUsers();
        console.log(resp);
}

consultar()


