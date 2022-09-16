const mongoose = require('mongoose');

const { Schema } = mongoose;

const PackagesSchema = new Schema({
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

const Packages = mongoose.model('discussions', packageSchema);
module.exports = { Packages };