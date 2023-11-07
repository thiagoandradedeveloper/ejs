//index.html
/*<button onclick="carregarPaginaEJS()">Carregar</button>
<div id="conteudo-dinamico"></div>
<script>
    // Função para carregar e renderizar a página EJS em tempo real
    function carregarPaginaEJS() {
        fetch('/ejs') // Substitua com o URL correto da página EJS
            .then(response => response.text())
            .then(data => {
                document.getElementById('conteudo-dinamico').innerHTML = data;
            })
            .catch(error => console.error(error));
    }
</script>*/

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