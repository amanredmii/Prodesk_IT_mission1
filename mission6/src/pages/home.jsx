import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center flex items-center justify-center relative">

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative text-center text-white">
                <h1 className="text-6xl font-bold mb-4">Welcome to My Store</h1>
                <p className="text-xl mb-6">Best products at best prices</p>
                <Link
                    to="/shop">
                    <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">
                        Shop Now
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Home;