const express = require("express");
const routerUser = require("./routes/routerUser");
const routerPets = require("./routes/routerPets");


const app = express();

app.use(express.json())

app.use('/api/users',routerUser)
app.use('/api/pets',routerPets)

app.use('/statics',express.static(__dirname+'/public'))


app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).json({msg:'Ocurrio un error',error: err.message})
})

app.listen(8080, () => {
    console.log('servidor corriendo correctamente por el puerto 8080')
})