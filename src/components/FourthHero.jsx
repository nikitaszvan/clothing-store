import React from "react";
import OutfitCard from "./OutfitCard.jsx"

function FourthHero() {
    return (
        <div className="fourth-hero">
            <div className="first-column-4-hero">
                <p className="first-c-p-1">dsv</p>
                <h2 className="first-c-h2">wwqe</h2>
                <p className="first-c-p-2">dsv</p>
            </div>
            <div className="second-column-4-hero">
                <h2 className="second-c-h2">sdvsdv</h2>
                <p className="second-c-p-1">dsv</p>
                <p className="second-c-p-2">dv</p>
            </div>
            <div className="third-column-4-hero">
            <OutfitCard />
            <OutfitCard />
            </div>

        </div>
    )
}

export default FourthHero;