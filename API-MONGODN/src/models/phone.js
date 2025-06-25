const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
   phonename: {
    type: String,
    required: true
   },
   marca: {
    type: String,
    required: true
   },
   modelo: {
    type: String,
    required: true
   }
});

module.exports = mongoose.model('Phone', phoneSchema);