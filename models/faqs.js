var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var querySchema = new Schema({
  query: String,
  answer: String,
});

module.exports = mongoose.model("Query", querySchema);
