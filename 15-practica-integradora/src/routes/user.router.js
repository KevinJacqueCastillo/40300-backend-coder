const { Router } = require('express');
const UsersModel = require('../models/users.model');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await UsersModel.find();
    console.log(users);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  const { first_name, last_name, email } = req.body;
  const newUser = new UsersModel({ first_name, last_name, email });
  const responseUser = await newUser.save();
  res.send(responseUser);
});

router.put('/:uid', async (req, res) => {
  const { uid } = req.params;
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(400).send('Missing fields');
  }
  try {
    const user = await UsersModel.updateOne(
      { _id: uid },
      { first_name, last_name, email }
    );
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error updating user',
    });
  }
});

router.delete('/:uid', async (req, res) => {
  const { uid } = req.params;
  try {
    const users = await UsersModel.deleteOne({ _id: uid });
    res.send({
      message: 'OK',
      body: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error deleting user',
    });
  }
});

module.exports = router;
