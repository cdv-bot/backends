const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const route = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require("cors");

app.use(cors());

const db = require("./src/config/db");
//connect
db.connect();

route(app);

//  index => routes => app.use('/', router_con) => router_con('/new/',controller)

app.listen(port, () => {
  console.log(`done`);
});
