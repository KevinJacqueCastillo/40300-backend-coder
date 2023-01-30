const express = require('express');
const usersRouter = require('./routes/user.router');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://kjjacquec:4somikNyfWFa4P4w@cluster0.7km24.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
const PORT = 8080;

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
