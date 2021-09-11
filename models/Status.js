const mongoose = require("mongoose");

const Status = mongoose.model("Status", {
  status: String,
});

module.exports = Status;
