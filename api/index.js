const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const packageRoutes = require('./controllers/PackageController');

app.use('/package', packageRoutes);

const deliveryRoutes = require('./controllers/DeliveriesController');

app.use('/delivery', deliveryRoutes);

const driverRoutes = require('./controllers/DriversController');

app.use('/driver', driverRoutes);

app.get('/greeting', (req, res) => res.send("Welcome"));

app.get('/getError', (req, res, next) => next({ status: 418, msg: 'Problem?' }));

app.use('*', (req, res, next) => next({ status: 404, msg: 'No Valid URL Found' }));

app.use((err, req, res, next) => {
  console.log('Error encountered:');
  console.log(err.msg);
  return res.status(err.status).send(err.msg);
});

const server = app.listen(5000, () => {
  console.log(`Started server on port No. ${server.address().port}`);
});

module.exports = server;
