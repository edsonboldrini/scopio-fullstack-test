import express, { response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Ok' });
})

app.listen(3000, ()=>{
  return console.log('Server started on port 3000');
})