import React from 'react';


function Contact() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 p-5">

            <div className="w-full max-w-[500px] flex flex-wrap bg-white rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]">


                <div className="flex-1 p-[30px]">
                    <h3 className="text-xl font-semibold mb-[15px]">Send Message</h3>

                    <form className="flex flex-col gap-[15px]">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-[10px] border border-gray-300 rounded-[8px] outline-none focus:border-blue-600 transition"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-[10px] border border-gray-300 rounded-[8px] outline-none focus:border-blue-600 transition"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-[10px] border border-gray-300 rounded-[8px] outline-none focus:border-blue-600 transition"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="p-[10px] border border-gray-300 rounded-[8px] outline-none focus:border-blue-600 transition"
                        ></textarea>

                        <button
                            type="submit"
                            className="p-[10px] bg-blue-600 text-white rounded-[8px] cursor-pointer transition hover:bg-blue-700"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;