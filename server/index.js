const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const { MONGO_URL, PORT } = process.env;

app.use(cors());
mongoose
  .connect(MONGO_URL, {})
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
