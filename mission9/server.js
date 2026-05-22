const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());

let blogpost = [];

app.get("/posts", (req, res) => {
    res.json(blogpost);
});




app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < blogPosts.length; i++) {
        if (blogposts[i].id === id) {
            return res.json(blogposts[i]);
        }
    }
});






app.post("/posts", (req, res) => {
    const add_pst = req.body;
    blogpost.push(add_pst);
});



app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    for (let i = 0; i < blogPosts.length; i++) {

        if (blogPosts[i].id === id) {

            blogPosts[i] = {
                ...blogPosts[i],
                ...req.body
            };
            return res.json({
                message: "post updated",
                data: blogPosts[i]
            });
        }
    }


});



app.delete("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id);

    for (let i = 0; i < blogpost.length; i++) {
        if (blogpost[i].id === id) {
            blogpost.splice(i, 1);
            break;
        }
    }
    res.json({
        message: "post deleted"
    });

});


app.listen(port, () => {
    console.log(`Server running on port ${PORT}`);
});