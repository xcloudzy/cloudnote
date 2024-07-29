const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());

app.use(
  cors({
    origin: ["https://icloudnote.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("*", (req, res, next) => {
  res.status(200).json({
    message: "Connected to vercel app",
  });
});

app.listen(port, () => {
  console.log(`iNotebook backend is listening to http://localhost:${port}`);
});
