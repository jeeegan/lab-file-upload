const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = new Schema({
  content: String,
  creatorId: ObjectId,
  picPath: String,
  picName: String
});

const Post = mongoose.model("Post", postModel);
module.exports = Post;