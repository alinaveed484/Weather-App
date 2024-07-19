const express = require('express')
const app = express()
const port = 3000
require('dotenv').config({ path: 'API.env' });
const weatherRouter = require('./routes/weather');

app.use((req, res, next) => {
  console.log(`${req.method} request for "${req.url}"`);
  next();
});

//This function adds JSON Data sent by the user to the req.body
app.use(express.json());

app.use('/weather', weatherRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});