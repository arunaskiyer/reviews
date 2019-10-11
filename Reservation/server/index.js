const express = require('express');
const query = require('../database/query.js');
const moment = require('moment');
const app = express();
const port = 3010;

app.get('/now', (req, res) => {
  console.log(req.query);
  let month = moment(req.query.date).month() + 1;
  query.getTwoMonth(1, month, res.send.bind(res));
});

app.listen(port, () => console.log(`Reservation Component listening on port ${port}!`));
