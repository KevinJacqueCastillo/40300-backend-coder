const users = []

const getUsers = (req, res) => {
    res.json({
        users
   }) 
}

const createUser = (req,res) => {
    const user = req.body.user; 
    users.push(user);
    res.json({
        msg: 'usuario creado con exito',
        users
    })
}

const updateUser = (req, res) => {
    const index = req.params.index;
    const user = req.body.user; 
    users[index] = user;

    res.json({
        msg: 'Actualizacion correcta'
        ,users
    })
}

const deleteUser = (req, res) => {
    const index = req.params.index;
    if (users[index]) {
        users.splice(index, 1);
    }
    res.json({
        users
    })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}