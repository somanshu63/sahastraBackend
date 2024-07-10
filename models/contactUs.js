var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contactUsSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
});

module.exports = mongoose.model("ContactUs", contactUsSchema);
