require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser')
// const bodyParser = require("body-parser")

// Routes
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes")
const filmRoute = require("./routes/filmRoutes")

const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     console.error('Bad JSON format:', err.message);
//     return res.status(400).send({
//       message: 'Bad JSON format',
//       error: err.message,
//       received: req.body,
//       expected: 'A valid JSON object with double-quoted property names and values'
//     });
//   }
//   next();
// });

//env
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.APP_PORT;
//Cors configuration
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200/", "http://localhost:4200"],
  })
);

app.use("/api", userRoute);
app.use("/api", authRoute);
app.use("/api", filmRoute)
// Lauch server
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server mongo connect " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
