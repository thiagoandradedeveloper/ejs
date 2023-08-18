
const express = require('express');
const app = express();
const ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/views')));

app.get('/home', (req, res) => {
  const dados = {
    nome: 'John Doe',
    email: 'john.doe@example.com',
    estado_civil: false,
  };
  //index.ejs que vai ser chamado 
  res.render('index', dados);
});

app.get('/dado', (req, res) => {
    const dados = {
      nome: 'John Doe',
      email: 'john.doe@example.com',
      estado_civil: false,
    };
    res.json(dados);
});

app.listen(3000, () => {
  console.log('Servidor em execução no http://localhost:3000');
});
