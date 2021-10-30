const connectDB = require('./connectDB.js');
const route = require("./route.js");
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.listen(process.env.PORT, async() => {
    console.log(`---------------------------------------`);
    console.log(`Server: on`);
    console.log(`http://localhost:${process.env.PORT}`);
    await connectDB();
    await route(app);
});
