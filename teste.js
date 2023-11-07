

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


if (isPortUsed(3000)) {
  console.log('A porta 80 está sendo usada');
} else {
  console.log('A porta 80 não está sendo usada');
}