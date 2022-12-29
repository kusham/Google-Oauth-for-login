const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const databaseConnection = require("./src/config/DBconnect");
const routes = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, async () => {
  console.log(`App is running on port number ${PORT}`);
  await databaseConnection();
  app.use(routes)
});
