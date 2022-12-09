var express = require("express");
const cors = require("cors");
const tools = require("./routes/tools.routes");
const { viewcount } = require("./middleware/viewCount.middleware");
const { connectToServer } = require("./utls/dbConnect");
const { successDb } = require("./utls/suceess");

var app = express();

connectToServer((err) => successDb(err));

app.use(cors());
app.use(express.json());
app.use(viewcount);


app.use("/tool", tools);


app.listen(3000);
