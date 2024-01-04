const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  caption: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  image: {
    data: Buffer, 
    contentType: String,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
