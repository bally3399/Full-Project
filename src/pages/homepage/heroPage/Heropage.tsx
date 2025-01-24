import React, { useState, useEffect } from "react";
import styles from "@/component/styles.module.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Link from "next/link";
import store from "@/redux/Store";
import {Provider} from "react-redux";
import image1 from "@/asset/image1.jpeg";
import image2 from "@/asset/image2.jpeg";
import image3 from "@/asset/image3.jpeg";
import image4 from "@/asset/image4.jpeg";
import image5 from "@/asset/image5.jpeg";
import image6 from "@/asset/image6.jpeg";
import image7 from "@/asset/image7.jpeg";
import image8 from "@/asset/image8.jpeg";
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


const HeroPage: React.FC = () => {
    const tagLine = "🪡"
    const brandName = "Soft Touch";
    const tagline = "Creatively Made For Kings";
    const [visibleText, setVisibleText] = useState("");
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const fullText = tagLine + "\n" + brandName + "\n" + tagline;
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                const nextChar = fullText.charAt(index);
                console.log(`Adding character: ${nextChar} at index: ${index}`);
                setVisibleText((prev) => prev + nextChar);
                index++;
            } else {
                clearInterval(interval);
                setShowButton(true);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [brandName, tagline]);

    return (
        <main>
            <Navbar />
            <div className={`${styles.hero}`}>
                <h1 className={`${styles.tagLine}`}>
                    {visibleText.split("\n")[0]}
                </h1>
                <h1 className={`${styles.brandName}`}>
                    {visibleText.split("\n")[1]}
                </h1>
                {visibleText.includes("\n") && (
                    <p className={`${styles.tagline}`}>{visibleText.split("\n")[2]}</p>
                )}
                {showButton && (
                    <Link href={'/role'}>
                        <button className={`${styles.button}`}>Get Started</button>
                    </Link>
                )}
            </div>
            <Provider store={store}>
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
                                    width={300}
                                    height={300}
                                />
                                <div className="p-4">
                                    <h2 className="text-[#daa520] text-lg font-semibold">
                                        {product.id}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Provider>
            <Footer/>
        </main>
    );
};

export default HeroPage;
