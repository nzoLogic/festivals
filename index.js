import express from 'express';
import DB from './db';
let app = express();

app.get('/*', (req, res) => {
  res.send('hello')
})
app.get('/api/festivals')
app.listen(3001, () => console.log('listening on 3k'))
