
/*
    Testa conexão na porta 3000
*/

const net = require('net');

function checkPortAvailability(port) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once('error', () => resolve(false))
      .once('listening', () => {
        tester.once('close', () => resolve(true)).close();
      })
      .listen(port,'localhost'); 
      //se omitirmos o paramentro 'localhost' pegara 
      //todas as oportas do Sistema Operacional
  });
}

// Exemplo de uso:
const port = 3000;

setTimeout(()=>{
  checkPortAvailability(port)
  .then((isAvailable) => {
    if (isAvailable) {
      console.log(`A porta ${port} está disponível.`);
    } else {
      console.log(`A porta ${port} já está sendo usada.`);
    }
  })
  .catch((err) => {
    console.error(`Erro ao verificar a porta ${port}:`, err);
  });
},500)

/*
Manipulação da TAG style com Javascript 

<!DOCTYPE html>
<html>
<head>
  <style id="dynamic-styles"></style>
</head>
<body>
  <h1>Exemplo de inserção de regra de estilo dinâmica</h1>
  <p class="highlight">Este parágrafo terá um plano de fundo amarelo.</p>

  <script>
    // Obtendo a referência para a folha de estilo
    var stylesheet = document.getElementById('dynamic-styles').sheet;

    // Definindo a nova regra CSS
    var rule = ".highlight { background-color: yellow; padding: 10px; }";

    // Inserindo a nova regra na folha de estilo
    stylesheet.insertRule(rule, 0);

    // Removendo a regra no índice 0
    stylesheet.deleteRule(0);

    //addRule: Este método é semelhante ao insertRule, mas é usado para adicionar 
    //uma regra de estilo em navegadores mais antigos, como o Internet Explorer.
    // Obtendo a referência para a folha de estilo
    var stylesheet = document.styleSheets[0];

    // Adicionando uma nova regra na folha de estilo
    stylesheet.addRule("p", "color: red;");

    // Obtendo a referência para a folha de estilo
    var stylesheet = document.styleSheets[0];

  </script>
</body>
</html>

*/

/*
código do bard para saber se uma porta está sendo usada em node, não testei PC quebrado
*/


const net = require('net');

function isPortUsed(port) {
  const server = net.createServer((socket) => {
    socket.end();
    server.close();
  });

  try {
    server.listen(port, () => {
      server.close();
      return true;
    });
  } catch (e) {
    if (e.code === 'EADDRINUSE') {
      return true;
    } else {
      throw e;
    }
  }
}

const isPortUsed = require('./isPortUsed');

if (isPortUsed(80)) {
  console.log('A porta 80 está sendo usada');
} else {
  console.log('A porta 80 não está sendo usada');
}

/* EJS */
