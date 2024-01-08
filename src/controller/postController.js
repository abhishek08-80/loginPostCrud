const Post = require('../model/postSchema');

const createStatus = async (req, res) => {
  const newPost = new Post(req.body); 
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateStatus = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json("status not found");
    }

    if (post.userId.toString() === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The status has been updated");
    } else {
      res.status(403).json("You can update only your status");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteStatus = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json("status not found");
    }

    if (post.userId.toString() === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The status has been deleted");
    } else {
      res.status(403).json("You can delete only your status");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};


//Read All Post
const getAllPosts = async (req, res) => {
  try {
    // Retrieve all posts
    const posts = await Post.find();

    res.status(200).json({ success: true, message: 'All posts retrieved successfully', posts });
  } catch (error) {
    console.error('Error in getting all posts:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};




module.exports = {
  createStatus,
  updateStatus,
  deleteStatus,
  getAllPosts
};


