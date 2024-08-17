const express = require('express');

const app = express();
const port = 8081;

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

app.get('/register/:name/:lastname/:age', (req, res) => {
    res.send('Nome: ' + req.params.name + ' Sobrenome: ' + req.params.lastname + ' Idade: ' + req.params.age);
});

app.listen(port, () => {
    console.log(`Listenting on port ${port}`)
})