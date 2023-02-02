const express = require('express');
const viewRouter = require('./routes/views.router');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const productsRouter = require('./routes/products.router');

const app = express();
const PORT = 8080;
mongoose.set('strictQuery', false);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', viewRouter);
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect(
  'mongodb+srv://kjjacquec:4somikNyfWFa4P4w@cluster0.7km24.mongodb.net/?retryWrites=true&w=majority',
  (error) => {
    if (error) {
      console.log('error de conexion', error);
      process.exit();
    } else {
      console.log('conexion exitosa');
    }
  }
);
