import React from "react";

function FirstHero() {
    return (
        <div className="first-hero">
            <div className="first-hero-div1">
            <p className="first-hero-p1">T I T L E</p>
            <h1 className="first-hero-h1">THE TRUTH</h1>
            <p className="first-hero-p2">Get the collection the entire population <br/>is waiting for</p>
            <button className="catalouge-btn">GET THE LOOK</button>
            </div>
            <img className="first-hero-models" src="/images/first-hero-figures.png" alt="models wearing clothes"/>
            
        </div>
    )
}

export default FirstHero;