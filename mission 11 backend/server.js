require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/m_routes");
const app = express();
app.use(
    cors({
        origin:
            "http://localhost:5173"
    })
);

app.use(
    express.json()
);

mongoose
    .connect(
        process.env.mdb
    )
    .then(() => {

        console.log(
            "Mongo Connected"
        );

    })
    .catch((err) => {

        console.log(err);

    });

app.use(
    "/api/movies",
    movieRoutes
);

app.listen(
    5000,
    () => {

        console.log(
            "Backend Running"
        );

    }
);