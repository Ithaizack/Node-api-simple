import express from "express"


const app = express()
const route = express.Router()


app.use(express.json())

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

app.listen(4040,()=>console.log("Servidor rodando em localhost:4040"))