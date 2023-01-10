const { Router } = require("express");
const { getPets, createPet, uploadFile } = require("../controller/pets");
const multerUtils = require("../utils/multer.utils");

const router = Router();

router.get('/', getPets)
router.post('/', createPet)
router.post('/img',multerUtils.single('file'), uploadFile)


module.exports = router