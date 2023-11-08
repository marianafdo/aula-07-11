// npm init / npm install nodemon
// const configs = require(./package.json)
const express = require('express');
const srv = express();

srv.get('/', (req, res)=>{
    const homepage = {
        titulo: 'Servidor 2',
        subtitulo: 'Homepage',
        texto: 'Lorem ipsum...'
    }
    res.json(homepage);
});

srv.get ('/info', (req, res)=>{
    const infos = {
        nome: 'Servidor 2',
        versao: '1.0.0',
        licenca: 'MIT'
    }
    res.json(infos);
});

srv.listen(3030, servidorAguardando);

/* function getRootHtml(req, res){
    const homepage = `<!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Servidor 2 - Homepage</title>
    </head>
    <body>
        <h1>Servidor 2</h1>
        <h2>Homepage</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem eos quaerat officia iste alias ad praesentium vitae facere aut quasi consequatur repellendus, eveniet pariatur ut iusto autem dolor placeat!</p>
    </body>
    </html>`
    res.send(homepage);
} */

function servidorAguardando(){
    console.log(`Aguardando conexões...`)
}