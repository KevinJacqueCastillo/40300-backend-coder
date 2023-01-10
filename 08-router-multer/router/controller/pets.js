
const pets = [];


const getPets = (req, res) => {
    // throw Error('Error manual')
    res.json({
        pets
    })
}


const createPet = (req,res) => {
    const pet = req.body.pet;
    console.log(req.body)
    pets.push(pet);
    res.json({
     msg:'se creo correctamente la mascota'   
    })
}

const uploadFile = (req,res) => {
    console.log(req.body.thumbnail)
    res.json({
        msg:'se subio exitosamente el archivo'
    })
}


module.exports = {
    getPets,
    createPet,
    uploadFile
}