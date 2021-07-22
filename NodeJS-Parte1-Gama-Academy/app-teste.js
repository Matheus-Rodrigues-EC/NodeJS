//inclui uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//Definição de endereço / URL
const HostName = '127.0.0.1'; //LocalHost
const Port = 3000; //Numero da porta

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

    //Pegar uma pergunta na URL
    const params = queryString.parse(url.parse(req.url, true).search);
    // console.log(params);
    //Verificar a pergunta e escolher uma resposta
    //Retornar a reposta escolhida

    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/plain');
    res.end(params.pergunta);
});

//execução
server.listen(Port, HostName, () => {
    console.log(`Server running at http://${HostName}:${Port}/`);
});