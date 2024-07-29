const mongoose = require("mongoose");
const mongoURI = process.env.DATABASE;

const connectToMongo = async () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
