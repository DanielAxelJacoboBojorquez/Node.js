const express = require('express');
const app = express();

const port = 3000;
//Motor de Plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req,res) => {
  res.render("index",{titulo : "titulo dinamico"})
})

app.get('/servicios', (req,res) => {
  res.render("servicios", {tituloservicios: "titulo servicios"})
})

app.listen(port, () => {
  console.log('Escuchando en el puerto', port)
})

app.use((req, res, next) => {
  res.status(404).render("404")
})
