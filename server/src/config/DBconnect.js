const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      console.log({ error: error.message });
      console.log("MongoDB connection failed");
    });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB connection is success!");
  });
};
 
module.exports = databaseConnection;
