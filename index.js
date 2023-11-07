
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
//libera para acessar os arquivos na pasta views
app.use(express.static(path.join(__dirname, '/views')));

const dados = {
  nome: 'John Doe',
  email: 'john.doe@example.com',
  estado_civil: true
};

app.get('/home', (req, res) => {
  // Lê o arquivo HTML usando o módulo fs
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo HTML:', err);
      res.status(500).send('Erro ao ler o arquivo HTML: 500');
    } else {
      // Envie o conteúdo do arquivo HTML como resposta
      res.send(data);
    }
  });
});

app.get('/ejs', (req, res) => {
  // Caminho para o arquivo JSON
  const caminhoArquivo = 'dados.json';

  // Lê o arquivo JSON
  fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
    // Analisa o conteúdo do arquivo JSON em um objeto JavaScript
    const objetoJSON = JSON.parse(data);

    // Renderiza a página EJS e a envia como resposta
    ejs.renderFile(__dirname + '\\views\\index.ejs', objetoJSON, (err, str) => {
      if (err) {
        console.error('Erro ao renderizar a página EJS:', err);
        res.status(500).send('Erro ao renderizar a página EJS(500)');
      } else {
        res.send(str);
      }
    });
  });
});

//recebe requisiçoes e retona um json
app.get('/dado', (req, res) => {
    res.json(dados);
});

app.get('/sobre', (req, res) => {
  res.render('sobre', dados);
});

app.listen(3000, () => {
  console.log('Servidor em execução no http://localhost:3000');
});
