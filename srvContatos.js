const express = require('express');
const contatos = require('./contatos.json');

const srv = express();

srv.get('/contatos/json', (req, res)=>{
    res.json(contatos)
});

srv.get('/contatos/html', (req,res)=>{
    listaHTML = `<ul>`;
    for (let index = 0; index < contatos.length; index++) {
        const contato = contatos[index];
        listaHTML= listaHTML + `<li>${contato.nome} - ${contato.email}</li>`    
    }
    listaHTML = listaHTML + `</ul>`;
    res.send(listaHTML);
})

srv.get('/contatos/csv', (req,res)=>{
    listaTXT = 'nome,email\n';
    for (let index = 0; index < contatos.length; index++) {
        const contato = contatos[index];
        listaTXT = listaTXT + `${contato.nome}, ${contato.email}` + `\n`
    }
    res.send(listaTXT);
})
// srv.get('/dizoi/:nome', ...)
srv.get('/:nome', (req, res)=>{
    res.send(
        `Oi, ${req.params.nome}`
    );
})
srv.listen(8080, ()=>{
    console.log('Pronto para servir contatos');
});