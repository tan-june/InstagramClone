const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const formidable = require('formidable');
const fs = require('fs');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const Post = require('./Schemas/PostSchema');

mongoose.connect('mongodb://127.0.0.1:27017/fake_insta', { useNewUrlParser: true, useUnifiedTopology: true })
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

app.post('/NewPost', (req, res) => {
  const form = new formidable.IncomingForm({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        console.error('Error parsing form data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const caption = fields.caption;
      const image = files.image;

      console.log('Received Form Data:', { caption, image });

      if (!image || !image.path) {
        throw new Error('Image file not found in form data.');
      }

      const newPost = new Post({
        caption: caption,
        image: {
          data: fs.createReadStream(image.filepath),
          contentType: image.type,
        },
      });

      await newPost.save();

      res.status(201).json({ message: 'Data received successfully' });
    } catch (error) {
      console.error('Error handling form data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});



const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server;
