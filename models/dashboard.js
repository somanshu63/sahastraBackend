var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dashboardSchema = new Schema(
  {
    site: String,
    activity: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dashboard", dashboardSchema);
