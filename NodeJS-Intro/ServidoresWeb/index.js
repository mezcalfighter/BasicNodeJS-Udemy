const express = require('express');
const Service = require('./src/service');

const app = express();
const PORT = 3000;

// Para poder recibir datos
app.use(express.json());

app.get('/',(req, res) =>{
    res.json({
        message:"Lista de usuarios",
        body: Service.getUsers()
    });
});

app.get('/:id', (req,res)=>{
    let { params:{id}} = req;
    let user = Service.getUser(id);
    res.json({
        message:`Usuario: ${id}`,
        body:user,
    });
});

app.put('/:id',()=>{
    // Respuesta aqui
});

app.delete('/:id',()=>{
    // Respuesta aqui
});

app.post('/',(req,res) => {
    let { body:newUser } = req;
    res.status(201).json({
        message:"Usuario creado",
        body: Service.createUser(newUser)
    });
});

app.listen(PORT,()=>{
    console.log(`Server is listening in http://localhost:${PORT}`);
});