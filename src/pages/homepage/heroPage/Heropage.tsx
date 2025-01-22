import React, { useState, useEffect } from "react";
import styles from "@/component/styles.module.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Link from "next/link";
import ProductCard from "@/pages/product/Product";

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
            <ProductCard/>
            <Footer/>
        </main>
    );
};

export default HeroPage;
