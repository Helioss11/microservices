const expres = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = expres();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/posts', event);

  res.send({ status: 'ok' })
});

app.listen(4005, () => {
  console.log('Listening on port 4005')
});