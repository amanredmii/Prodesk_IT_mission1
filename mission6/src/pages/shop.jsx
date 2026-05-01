import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <h2 className="text-3xl font-bold text-center mb-10">
                Shop Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(item => (
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">


                            <div className="h-48 bg-gray-100 flex items-center justify-center">
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="h-full object-contain p-4"
                                />
                            </div>


                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-gray-800 truncate">
                                    {item.title}
                                </h4>

                                <p className="text-green-600 font-bold mt-2 text-lg">
                                    ₹ {item.price}
                                </p>

                                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                    View Details
                                </button>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Shop;