import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contex";


function Product() {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen text-xl font-semibold">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white shadow-xl rounded-2xl max-w-5xl w-full grid md:grid-cols-2 gap-8 p-6">

                <div className="bg-gray-100 rounded-xl flex items-center justify-center">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="h-80 object-contain p-4"
                    />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            {product.title}
                        </h2>

                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>

                        <p className="text-2xl font-bold text-green-600 mb-4">
                            ₹ {product.price}
                        </p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                            Add to Cart
                        </button>

                        <button className="flex-1 border border-black py-3 rounded-xl hover:bg-black hover:text-white transition">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product;