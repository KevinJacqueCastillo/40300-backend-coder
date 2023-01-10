const { Router } = require("express");
const {  getUsers, createUser, deleteUser, updateUser } = require("../controller/users");


const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:index', updateUser);
router.delete('/:index', deleteUser);


module.exports = router