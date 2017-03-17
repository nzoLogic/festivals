import express from 'express';
let app = express();
let db = require('./db');


app.get('/api/festivals', (req, res) => {
  let festivals = db.Festival.find({}, (err, festivals) => err? console.log("error in db") : res.json(festivals))
})

app.get('/*', (req, res) => {
  res.send('hello')
})


app.listen(3001, () => console.log('listening on 3001'))
