const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/Post.model');

/* GET home page */
router.get('/', (req, res) => {
  Post.find((err, posts) => {
    if(err) {
      console.log(err)
    } else {
      res.render('index', { posts });
    }
  });
});

module.exports = router;
