const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

let usuarios=[
  {
    "id":"1",
    "nombre":"Pepe",
    "apellido":"Pepez",
    "telefono":111111111
  },
  {
    "id":"2",
    "nombre":"Pepi",
    "apellido":"Pepiz",
    "telefono":222222222
  },
  {
    "id":"3",
    "nombre":"Pepo",
    "apellido":"Pepoz",
    "telefono":333333333
  }
];

app.get('/user1',(req, res)=>{
  res.json(usuarios[0]);
});

app.get('/users',(req, res)=>{
  res.json(usuarios);
});

app.get('/users/:id',(req, res)=>{
  let userId=parseInt(req.params.id,10);
  let resultado= usuarios.find((u)=>u.id==userId);
  if(resultado){
    res.json(resultado);
  }else{
    res.status(404).json(({error:"Error, madafaka"}));
  }
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
