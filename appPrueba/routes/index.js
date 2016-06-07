var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express ' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.post('/contacto', function(req, res, next){
  console.log(req.body);
  var nombre = " ";

  if (req.body.btnEnviar && true){

    if (req.body.txtNombre === "Kevin"){
      res.redirect('/');
    }
    console.log("ENTRO");
    nombre = String(req.body.txtNombre);
    console.log(nombre);
  }

  req.body.nombre = nombre;
  res.render('contacto', req.body);
});

module.exports = router;
