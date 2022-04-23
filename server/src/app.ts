import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'ok' })
})

export default app;