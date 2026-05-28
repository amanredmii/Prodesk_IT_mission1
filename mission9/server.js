const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let blogpost = [];

app.get("/posts", (req, res) => {
    res.json(blogpost);
});




app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < blogpost.length; i++) {
        if (blogpost[i].id === id) {
            return res.json(blogpost[i]);
        }
    }
});

app.post("/posts", (req, res) => {
    const add_pst = req.body;
    blogpost.push(add_pst);
    res.json({
        message: "post added",
        data: add_pst
    });
});



app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    for (let i = 0; i < blogpost.length; i++) {

        if (blogpost[i].id === id) {

            blogpost[i] = {
                ...blogpost[i],
                ...req.body
            };
            return res.json({
                message: "post updated",
                data: blogpost[i]
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


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});