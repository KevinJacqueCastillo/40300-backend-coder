const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        style:'index.css',
        name: "kevin",
    });

});
router.get("/signup", (req, res) => {
    res.render("signup",
        {
            inputs: [
                {
                    id: 'name',
                    type: 'text',
                    placeholder: 'Nombre',
            },
                {
                    id: 'email',
                    type: 'email',
                    placeholder: 'email@email.com',
            },
                {
                    id: 'password',
                    type: 'text',
                    placeholder: 'pass',
            }
        ]
    });

});



module.exports = router;