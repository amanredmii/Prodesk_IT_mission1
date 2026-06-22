import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});


io.on("connection", (socket) => {


    socket.on(
        "typing",
        (username) => {

            socket.broadcast.emit(
                "user_typing",
                username
            );

        }
    );

    socket.on(
        "send_message",
        (data) => {

            io.emit(
                "receive_message",
                {
                    username:
                        data.username,

                    message:
                        data.message,
                }
            );

        }
    );
});

server.listen(
    5000,
    () => {
        console.log(
            "Server Running"
        );
    }
);