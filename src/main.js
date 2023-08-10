const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
const logger = require("./helpers/logger");
const loggingMiddleware = require("./middleware/loggerMiddleware");

require("dotenv").config();

const { PORT, MONGO_DB_URI } = process.env;

const dbURI = MONGO_DB_URI || "mongodb://localhost:27017/todo_db"; // Replace 'todo_db' with your database name if needed.

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Handle connection events
db.on("error", (error) => {
  logger.error("MongoDB connection error:", error);
});

db.once("open", () => {
  logger.info("Connected to MongoDB...");
});

// Use CORS middleware
app.use(cors());

// Add the logging middleware to log every request
app.use(loggingMiddleware);

app.use(bodyParser.json());
app.use("/api", todoRoutes);

const port = PORT || 3000;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
