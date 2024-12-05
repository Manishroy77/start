const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.port;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('wellcome to my hotel');
})


const personRoutes = require('./Routes/personRoutes');
app.use('/person',personRoutes);



app.listen(port,()=>{
    console.log('server active')
})