const mongoose = require("mongoose");
require("dotenv").config();

// Connect Database
mongoose
  .connect(process.env.MONGOOSE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
