import express from 'express';

let app = express();

app.get('/*', (req, res) => {
  res.send('hello')
})

app.listen(3001, () => console.log('listening on 3k'))
