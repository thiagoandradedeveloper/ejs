const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/dado');
xhr.onload = () => {
  if (xhr.status === 200) {
    const responseText = xhr.responseText;
    console.log(responseText);
  } else {
    console.log('Erro ao fazer a solicitação HTTP:', xhr.status);
  }
};
xhr.send();