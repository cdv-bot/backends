const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const rfs = require("rotating-file-stream");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

const routers = require("./src/routes/router");
const db = require("./src/config/db");

//env
dotenv.config();
//connect db mongodb
db.connect();

//port
const port = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === "production";

const app = express();
//security xss
app.use(helmet());

//save log
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});
app.use(
  isProduction ? morgan("combined", { stream: accessLogStream }) : morgan("dev")
);

//cors
app.use(cors());
app.use(express.json());

app.use("/", routers);

app.get("/", (req, res) => {
  res.status(400).json([]);
});

app.get("*", (req, res) => {
  res.status(400).json([]);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
