require("dotenv").config();

const config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI:
    process.env.NODE_ENV === "development"
      ? process.env.MONGODB_TEST_URI
      : process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_LIFETIME: process.env.JWT_LIFETIME,
};

module.exports = config;

