const app = require("./app");
const { MONGODB_URI, PORT } = require("./config/config");
const connectToMongoDB = require("./database/db");

// start the server
const start = async () => {
  try {
    await connectToMongoDB(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on https://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

