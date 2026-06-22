import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat_input() {
    const [username, setUsername] = useState(
        localStorage.getItem("username") || ""
    );

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState("");

    useEffect(() => {
        socket.on(
            "receive_message",
            (data) => {

                setMessages((prev) => [
                    ...prev,
                    data,
                ]);

            }
        );


        socket.on(
            "user_typing",
            (user) => {

                setTyping(
                    `${user} is typing...`
                );

                clearTimeout(
                    typingTimeout
                );

                typingTimeout =
                    setTimeout(() => {
                        setTyping("");
                    }, 500);

            });

        return () => {

            socket.off(
                "receive_message"
            );

            socket.off(
                "users_count"
            );

            socket.off(
                "user_typing"
            );

        };

    }, []);

    const saveUsername = () => {

        if (!username.trim())
            return;

        localStorage.setItem(
            "username",
            username
        );

        setUsername(
            username
        );

    };

    const sendMessage = () => {

        const savedUser =
            localStorage.getItem(
                "username"
            );

        if (
            !savedUser ||
            !message.trim()
        )
            return;

        socket.emit(
            "send_message",
            {
                username:
                    savedUser,
                message,
            }
        );

        setMessage("");

    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex justify-center items-center p-6">

            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6">

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h1 className="text-3xl font-bold text-white">
                            Live Chat
                        </h1>

                    </div>

                </div>



                {!localStorage.getItem(
                    "username"
                ) && (

                        <div className="flex gap-3 mb-5">

                            <input
                                value={
                                    username
                                }
                                onChange={(e) =>
                                    setUsername(
                                        e.target.value
                                    )
                                }
                                placeholder="Enter Username"
                                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white outline-none"
                            />

                            <button
                                onClick={
                                    saveUsername
                                }
                                className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-xl text-white"
                            >
                                Join
                            </button>

                        </div>

                    )}


                <div className="bg-black/20 rounded-2xl h-[300px] overflow-y-auto p-4 space-y-3">

                    {messages.map(
                        (
                            msg,
                            index
                        ) => (

                            <div
                                key={index}
                                className="bg-white/10 p-3 rounded-xl"
                            >

                                <p className="text-indigo-300 font-semibold">
                                    {
                                        msg.username
                                    }
                                </p>

                                <p className="text-white">
                                    {
                                        msg.message
                                    }
                                </p>

                            </div>

                        )
                    )}

                </div>


                <div className="h-6 mt-3 text-green-400">

                    {typing}

                </div>



                <div className="flex gap-3 mt-2">

                    <input
                        value={
                            message
                        }

                        onChange={(e) => {

                            setMessage(
                                e.target.value
                            );

                            const user =
                                localStorage.getItem(
                                    "username"
                                );

                            if (
                                user &&
                                e.target.value
                            ) {

                                socket.emit(
                                    "typing",
                                    user
                                );

                            }

                        }}

                        onKeyDown={(
                            e
                        ) => {

                            if (
                                e.key ===
                                "Enter"
                            ) {

                                sendMessage();

                            }

                        }}

                        placeholder="Type message..."

                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none"
                    />

                    <button
                        onClick={
                            sendMessage
                        }
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition px-8 rounded-xl text-white"
                    >
                        Send
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Chat_input;