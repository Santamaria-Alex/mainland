const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 6000;

const app = express();

//middleware for
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/wSchRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
