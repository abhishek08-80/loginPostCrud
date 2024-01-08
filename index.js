const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./src/routes/index');

app.use(express.json());
app.use('/api/v1', router);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
mongoose.connect('mongodb://127.0.0.1:27017/postCrud')
.then(()=>{
    console.log("connected to mongodb")
})