const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');

const fetchUrl = 'https://jsonplaceholder.typicode.com/todos/';

const app = express();

app.use(bodyParser.json());
app.listen(8080, () => {
    console.log(`express is listening on: http://localhost:8080`);
  });

let settings = { method: "Get" };

app.get('/:id', async (req,res) => {
    fetch(fetchUrl + req.params.id, settings)
      .then( res => res.json())
      .then( json => {
        res.send(json);
      })
    });
