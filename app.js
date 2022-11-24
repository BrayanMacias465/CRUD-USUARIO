
const express = require('express');

const port = 9000;
const app = express();

const userRouter = require('./usuarios/usuarios.routes');

app.use(express.json());
app.use('/user', userRouter);

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})
