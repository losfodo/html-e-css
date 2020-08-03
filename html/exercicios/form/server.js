const express = require('express')/*backend *///importa o express
const app = express()//instancia express a variavel app
const bodyParser = require('body-parser')//faz import do body-parser:q faz parser no corpo do request q pega dados e joga dentro do request.body p ter acesso a todos os dados do formulario submetidos

app.use(bodyParser.urlencoded({ extended: true }))//app.use associa bodyparser , urlencoded:padrão

app.post('/usuarios', (req, resp) => {//conectar a /usuarios(requisição,resposta)
    console.log(req.body)//para saber de fato quem chegou na requisição
    console.log(req.query)
    resp.send('<h1>Parabéns. Usuário Incluido!!!</h1>')//quando a pessoa submeter imprime como resposta isso
})

app.post('/usuarios/:id', (req, resp) => {//id em usuarios apartir dos parametros da url,,utilizando o nodemon
    console.log(req.params.id)//mostrar parametros id
    console.log(req.body)//e tbm ver body
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')//resposta ao usuario
})

app.listen(3003)//porta chamada do localhost