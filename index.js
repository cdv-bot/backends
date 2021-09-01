const express = require("express");
const route = require("./src/routes");
const db = require("./src/config/db");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require("cors");

app.use(cors());

//connect
db.connect();

// route(app);

//  index => routes => app.use('/', router_con) => router_con('/new/',controller)

app.listen(port, () => {
  console.log(`done`);
});
