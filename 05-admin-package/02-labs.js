const crypto = require("crypto")
const fs = require("fs")


class UserManager{

    #pathFileUsers = './assets/Usuarios.json';


    async createUser (name,lastname,username,password) {
        try {

            const hash =  this.#hashPassword(password)
            if (fs.existsSync(this.#pathFileUsers)) {
                const users = await fs.promises.readFile(this.#pathFileUsers,'utf-8');
                const arrayUsers = JSON.parse(users);
                if (arrayUsers.map(user => user.username).includes(username)) {
                    console.log('Nombre de usuario ya existe en la bd')
                    return;
                };
                await fs.promises.writeFile(this.#pathFileUsers,JSON.stringify([...arrayUsers,{name,lastname,username,password:hash}]))
            } else {
                await fs.promises.writeFile(this.#pathFileUsers,JSON.stringify([{name,lastname,username,password:hash}]))
            }
        } catch (error) {
            console.log(error)
        }
    }

    #hashPassword(password) {
        const salt = crypto.randomBytes(16).toString("hex");
        const hashbuffer = crypto.scryptSync(password, salt, 64,);

        const hash = `${hashbuffer.toString('hex')}.${salt}`;
        return hash
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

    async validateUser(username, password) {
        if (fs.existsSync(this.#pathFileUsers)) { 
            const users = await fs.promises.readFile(this.#pathFileUsers,'utf-8');
            const arrayUsers = JSON.parse(users) ;
            return arrayUsers.filter((users) => {
                return (users.username === username && this.#validatePassword(users.password,password))
            }).length == 1 ;
        } else {
            console.log('no existe archivo usuarios')
            return false
        }
    }

    #validatePassword(
        hash,
        password
      ){
        // split() returns array
        const [hashedPassword, salt] = hash.split(".");
        // we need to pass buffer values to timingSafeEqual
        const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
        // we hash the new sign-in password
        const suppliedPasswordBuf =  crypto.scryptSync(password, salt, 64);
        // compare the new supplied password with the stored hashed password
        return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
    }
} 


const usersmanager = new UserManager();

(async () => {
    await usersmanager.createUser('kevin','jacque','kevin1183','hola123')
    console.log(await usersmanager.getUsers());
    console.log(await usersmanager.validateUser('kevin1183','hola1234'))

})()