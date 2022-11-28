require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const movementRoutes = require("./routes/movements");
const categoryRoutes = require("./routes/categories");

// Express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/movements", movementRoutes);

app.use("/api/categories", categoryRoutes);

// connect to db
mongoose
  //LOCAL:
  .connect(process.env.MONGO_LOCAL_URI)
  // ATLAS:
  // .connect(process.env.MONGO_ATLAS_URI)
  .then(() => {
    console.log("connect to db");
    // Listening for requests
    app.listen(process.env.PORT, () => {
      console.log(`listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
