const express = require('express')

const app = express()

app.use(express.json())

let users = [
    {
        "Token": "T4KJ12k2N5",
        "Nome": "Isaac",
        "Email": "isaacabreu499@gmail.com",
        "Senha": "12345"
    },
]

app.get('/',(req,res)=>{
    return res.json(users)
})
app.post('/create',(req,res)=>{
    const {Token,Nome,Email,Senha} = req.body
    const usuario = {Token,Nome,Email,Senha}
    users.push(usuario)
    return res.json(users)
})

app.listen(30001,()=>console.log("Rodando a aplicação em localhost:30001"))