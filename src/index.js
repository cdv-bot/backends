const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;
const route = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require("cors");

app.use(cors());
app.use(morgan("combined"));

const db = require("./config/db");
//connect
db.connect();

route(app);

//  index => routes => app.use('/', router_con) => router_con('/new/',controller)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
