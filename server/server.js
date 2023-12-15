const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())

const server = app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});

mongoose
  .connect('mongodb://127.0.0.1:27017/fake_insta', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error: ', err);
  });

process.on('SIGINT', () => {
  mongoose.connection.close();
  console.log('Server closed. Database instance disconnected.');
  process.exit(0);
});

module.exports = server;