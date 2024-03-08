require("express-async-errors");
const { NODE_ENV } = require("./config/config");

// express
const express = require("express");
const app = express();

// other packages
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

// middlewares
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

// routes
const authRoutes = require("./routes/auth.routes");

// middlewares
if (NODE_ENV === "production") {
  app.set("trust proxy", 1);
}
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get("/", (req, res) => {
  res.send("<h1>AAMU BOTB API</h1>");
});

// routes
app.use("/api/v1/auth", authRoutes);

// other middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;

