import express from 'express';
import bodyParser from 'body-parser'
import * as PowerRanger from '../models/PowerRanger';
const app = express();
app.use(bodyParser());

app.get('/', (req, res) => {
  PowerRanger
    .find()
    .then(rangers => res.send(rangers))
    .catch(err => res.send(err));
});

app.get('/:id', (req, res) => {
  PowerRanger
    .findById(req.params.id)
    .then(ranger => res.send(ranger))
    .catch(err => res.send(err));
});

app.put('/:id', (req, res) => {
  PowerRanger
    .update(req.body)
    .then(ranger => res.send(ranger))
    .catch(err => res.send(err));
});

app.post('/', (req, res) => {
  PowerRanger
    .create(req.body)
    .then(ranger => res.send(ranger))
    .catch(err => res.send(err));
});

app.delete('/:id', (req, res) => {
  PowerRanger
    .destroy(req.params.id)
    .then(response => res.send(response))
    .catch(err => res.send(err));
});

export default app;
