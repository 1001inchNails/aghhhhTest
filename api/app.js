const express = require('express');


const app = express();


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


module.exports = app;
