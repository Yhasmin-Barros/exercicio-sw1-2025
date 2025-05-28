const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (request, response)=>{
    let resultado = []
    let n1 = 0
    let n2 = 1

    for(let i = 0 ; i<=20; i++){
        resultado.push(n1)
        let seq = n1 + n2;
        n1 = n2;
        n2 =seq;
    }
    response.render('home', {valores: resultado})
})
app.listen(3000, () =>{
    console.log('Servidor na porta 3000')
})
