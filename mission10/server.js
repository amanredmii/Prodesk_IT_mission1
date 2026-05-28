const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

app.use(express.json());

const Post = require("./Post");

mongoose.connect("mongodb+srv://a67686729_db_user:123OCcDr4ZSfYscn@cluster0.mhiywxl.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/posts", async (req, res) => {

    const pst = await Post.create({
        title: req.body.title,
        content: req.body.content
    });

    res.status(201).json({
        message: "post created",
        data: pst
    });
});


app.get("/posts", async (req, res) => {
    const psts = await Post.find();
    res.json(psts);

});



app.delete("/posts/:id", async (req, res) => {
    const id = req.params.id;
    const dltpst = await Post.findByIdAndDelete(id);

    if (!dltpst) {
        return res.status(404).json({
            message: "post not found"

        });

    }
    res.json({
        message: "post deleted"
    });

}
);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});