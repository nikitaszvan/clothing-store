import React from "react";
import HomeNavbar from "./HomeNavbar.jsx";
import FirstHero from "./FirstHero.jsx";
import SecondHero from "./SecondHero.jsx";
import Divider from "./Divider.jsx";
import ThirdHero from "./ThirdHero.jsx";
import FourthHero from "./FourthHero.jsx";
import HomeFooter from "./HomeFooter";

function Homepage() {
    return (
        <div className="main-div">
            <HomeNavbar />
            <div className="reduced-width-div">
                <FirstHero />
                <SecondHero />
                <Divider />
                <ThirdHero />
                <FourthHero />
            </div>
            <HomeFooter />
        </div>
    )
}

export default Homepage;