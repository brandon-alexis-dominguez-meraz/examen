const express = require('express');
const hbs = require ('hbs');
const mongooser = require('mongoose');
cons PUERTO = process.env.port || 3000;

let pintoresRouter = require('./rutas/pintor');


// sitio web y hbs
const app= express();
app.set('view','hbs')
hbs.registerPartial(__dirname + '/views partials');
app.use(express.static(__dirname + '/public'));

app.use('/, pintoresRoutesr')
//conexion con mongo
mongooser.promise = global.promise;
const cadena =mongodb+srv = //testar:tester@cluster0-bilby.mongodb.net/<dbname>?retryWrites=true&w=majority
mongooser.connect(cadena,{useNewUrLParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('conexion establescida ')
}).caatch(err=> console.log(err));

app.listen(PUERTO,()=>{
    console.log('escuchando el puerto')
})