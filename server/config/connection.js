const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!');
}

);

module.exports = mongoose.connection;
