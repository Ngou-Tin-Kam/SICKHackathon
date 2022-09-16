const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb+srv://sickDB:sickDB@cluster0.l4zedie.mongodb.net/test', { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err);
  return console.log('Connection successful!');
});

const packageSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    assigned: {
      type: Boolean,
      required: true,
    },
    delivered: {
        type: Boolean,
        required: true,
      },
  }
);

const deliverySchema = new Schema({
  packages: {
    type: Array,
    required: false,
  },
  assignedTo: {
    type: String,
    default: 'None',
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
  },
  date: {
      type: String,
      required: true,
    },
}
);

const driverSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
}
);

const Packages = mongoose.model('packages', packageSchema);
const Deliveries = mongoose.model('deliveries', deliverySchema);
const Drivers = mongoose.model('drivers', driverSchema);

module.exports = { Packages, Deliveries, Drivers };