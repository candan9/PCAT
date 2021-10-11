const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');
//MIDDLE WARE
app.use(express.static('public'));

//ROUT
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
