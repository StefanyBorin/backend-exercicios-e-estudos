const express = require('express');

const app = express();
// porta principal
app.get('/', (requisicao, resposta)=>{
    resposta.send('Ola esse é o meu primeiro servidor com express');
});

app.get('/home', (requisicao, resposta)=>{
    resposta.send('Ola esse é o meu primeiro servidor com express');
});

app.get('/array', (requisicao, resposta)=>{
    const array = [1, 2, 3, 5, 6];
    resposta.send(array);
})

app.listen(3000);