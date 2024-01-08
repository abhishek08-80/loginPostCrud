const express = require('express');
const router = express.Router();
const post = require('../controller/postController');

router.post("/user", (req, res) => post.createStatus(req, res));
router.put("/user/:id", (req, res) => post.updateStatus(req, res));
router.delete("/user/:id", (req, res) => post.deleteStatus(req, res));
router.get("/status/:id", (req,res) => post.getAllPosts(req, res)); 
module.exports = router;




