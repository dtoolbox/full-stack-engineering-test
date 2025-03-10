import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
            <button 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;