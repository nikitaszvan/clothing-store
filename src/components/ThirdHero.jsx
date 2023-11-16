import React from "react";
import TextBox from "./TextBox.jsx";

function ThirdHero() {
    return (
        <div className="third-hero-container">
        <div className="third-hero">
        <TextBox 
        title="UNLEASH"
        p_1="sophistication"
        p_2="COMFORT"
        p_3="Explore our range and redefine your wardrobe effortlessly. Explore our"/>
        <TextBox 
        title="CLASSIC"
        p_1="refined with"
        p_2="HANDPICKED"
        p_3=" From timeless classics to the latest trends, our collection is curated."/>
        <TextBox 
        title="CONTEMPOR"
        p_1="Dress sharp"
        p_2="BOLD"
        p_3="Embrace the journey of self-expression with our divers. Explore our range"/>
        <TextBox 
        title="TIMELESS"
        p_1="designed to"
        p_2="SEAMLESSLY"
        p_3="Our collection of men's fashion is curated to suit every occasion, ensuring"/>
        </div>
        </div>
    )
}

export default ThirdHero;