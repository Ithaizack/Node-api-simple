import express from "express"


const app = express()
const route = express.Router()


let products = [
    {
        "Id": 1,
        "Codigo": "PO0001",
        "Nome": "Biscoito",
        "Preço": 5.60
    },
    {
        "Id": 2,
        "Codigo": "PO0002",
        "Nome": "Cereal",
        "Preço": 17.40
    },
    {
        "Id": 3,
        "Codigo": "PO0003",
        "Nome": "Sorvete",
        "Preço": 27.80
    }
]

let users = [
    {
        "Token": "T4KJ12k2N5",
        "id": 1,
        "Nome": "Isaac",
        "Email": "isaacabreu499@gmail.com",
        "Senha": "12345"
    },
    {
        "Token": "JA5SJ132D",
        "id": 2,
        "Nome": "Thiago",
        "Email": "thiagobr@gmail.com",
        "Senha": "laele"
    },
    {
        "Token": "KSAKSK12",
        "id": 3,
        "Nome": "Silvio",
        "Email": "BAITOLA@gmail.com",
        "Senha": "MATADODEPORCO"
    },
    {
        "Token": "a4A222k2H",
        "id": 4,
        "Nome": "Daniel",
        "Email": "Dannrammm@gmail.com",
        "Senha": "Tecnologo"
    },
    {
        "Token": "FFFFFFFF",
        "id": 5,
        "Nome": "Admin",
        "Email": "Admin@gmail.com",
        "Senha": "Admin"
    }
]

route.get('/users',(req,res)=>{
    return res.json(users)
})
route.post('/users/create',(req,res)=>{
    const {Token,Nome,Email,Senha} = req.body
    const usuario = {Token,Nome,Email,Senha}
    users.push(usuario)
    return res.json(users)
})
route.delete('/users/delete/:id',(req,res)=>{
    const {id} = req.params
    const updateusers = users.filter(user =>{
        return user.id != id
    })
    users = updateusers
    return res.status(200).json(users)

})
route.patch('/users/update/:id',(req , res)=>{
    const {id} = req.params
    const {Nome,Email,Senha} = req.body
    users.filter(use=>{
        if(use.id == id){
            use.Nome = Nome ? Nome: use.Nome
            use.Email = Email ? Email: use.Email
            use.Senha = Senha ? Senha: use.Senha
        }
    })

    return res.status(200).json(users)
})


route.get('/products',(req,res)=>{
    return res.status(200).json(products)
})
route.post('/products/create',(req,res)=>{
    const {Id,Codigo,Nome,Preço} = req.body
    const NewProduto = {Id,Nome,Codigo,Preço}
    products.push(NewProduto)
    return res.status(200).json(products)
})
route.delete('/products/delete/:id',(req,res)=>{
    const {id} = req.params
    const DeleteProduct = products.filter(product =>{
        return product.id != id
    })
    products = DeleteProduct
    return res.status(200).json(products)

})

app.use(route)

const port = process.env.PORT || 4040

app.listen(4040,()=>console.log("Servidor rodando em localhost:4040"))