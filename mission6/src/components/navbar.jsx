import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contex";

function Navbar() {

    const { cart } = useContext(CartContext);
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-slate-900/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                            <span className="text-slate-900 dark:text-white">MyStore</span>
                        </Link>
                    </div>


                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                to="/"
                                className="text-xl font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 dark:text-slate-300 dark:hover:text-white"
                            >
                                Home
                            </Link>
                            <Link
                                to="/shop"
                                className="text-xl font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 dark:text-slate-300 dark:hover:text-white"
                            >
                                Shop
                            </Link>
                            <Link
                                to="/contact"
                                className="text-xl font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 dark:text-slate-300 dark:hover:text-white"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/cart"
                            >
                                <button className="bg-yellow-200 px-6 py-2 rounded-full hover:bg-yellow-350 relative">
                                    Cart
                                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                        {cart.length}
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

