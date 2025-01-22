import React from "react";
import image1 from "../../asset/image1.jpeg"
import image2 from "../../asset/image2.jpeg"
import image3 from "../../asset/image3.jpeg"
import image4 from "../../asset/image4.jpeg"
import image5 from "../../asset/image5.jpeg"
import image6 from "../../asset/image6.jpeg"
import image7 from "../../asset/image7.jpeg"
import image8 from "../../asset/image8.jpeg"
import Image from "next/image";

const products = [
    {
        id: "ST-01",
        image: image1,
    },
    {
        id: "ST-02",
        image: image2,
    },
    {
        id: "ST-03",
        image: image3,
    },
    {
        id: "ST-04",
        image: image4,
    },
    {
        id: "ST-05",
        image: image5,
    },
    {
        id: "ST-06",
        image: image6,
    },
    {
        id: "ST-07",
        image: image7,
    },
    {
        id: "ST-08",
        image: image8,
    },

];

const ProductCard = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-black shadow-md rounded-lg overflow-hidden"
                    >
                        <Image
                            src={product.image}
                            alt={product.id}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-[#daa520] text-lg font-semibold">{product.id}</h2>
                            <button className="mt-4 w-full bg-brown-500 text-[#daa520] text-sm font-medium py-2 px-4 rounded hover:bg-brown-600 transition duration-200">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
