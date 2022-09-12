import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send("Acess ap");
});

app.listen(3333);
