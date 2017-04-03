import express from 'express';
let app = express();
let db = require('./db');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
//api routes for festivals
app.get('/api/festivals', (req, res) => {
  let festivals = db.Festival.find({}, (err, festivals) => err? console.log("error in db") : res.json(festivals))
})

//Find festival by name
app.get('/api/festivals/:name', (req, res) => {
  let name = req.params.name;
  db.Festival.find({name: name}, (err, festival) => err ? console.log("error in db") : res.json(festival))
})
//redirect all other routes to default
app.get('/*', (req, res) => {
  res.send("")
})


app.listen(process.env.PORT || 3001)
