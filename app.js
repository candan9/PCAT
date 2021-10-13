const express = require('express');
const ejs = require('ejs');
const photoController = require('./controllers/photoController')
const pageController = require('./controllers/pageController')
const app = express();

const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');

//Connect MONGODB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLE WARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUT
app.get('/', photoController.getAllPhotos);
app.post('/photos', photoController.createPhoto);
app.get('/photos/:id', photoController.getPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto );
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);




const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
