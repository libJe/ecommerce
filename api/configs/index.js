const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, ".env.dev") });
} else {
  dotenv.config({ path: path.join(__dirname, ".env.prod") });
}

module.exports = {
  PORT: process.env.PORT,
};
