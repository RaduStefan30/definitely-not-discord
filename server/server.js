const express = require("express");

require("dotenv").config();

const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");

const authRouter = require("./routes/authRoutes");

const PORT = process.env.PORT || process.env.API_PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRouter);

const server = http.createServer(app);

mongoose
  .connect(process.env.CONNECTION)
  .then(() =>
    server.listen(PORT, () => {
      console.log(
        `DB connection established successfully. Server is listening on port ${PORT}...`
      );
    })
  )
  .catch((err) => console.log("Database connection failed. ", err));
