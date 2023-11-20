import React from "react";
import HomeNavbar from "./HomeNavbar.jsx";
import FirstHero from "./FirstHero.jsx";
import SecondHero from "./SecondHero.jsx";
import Divider from "./Divider.jsx";
import ThirdHero from "./ThirdHero.jsx";
import FourthHero from "./FourthHero.jsx";
import HomeFooter from "./HomeFooter.jsx";

function App() {
    return (
        <div className="main-div-container">
        <div className="main-div">
        <HomeNavbar />
        <FirstHero />
        <SecondHero />
        <Divider />
        <ThirdHero />
        <FourthHero />
        </div>
        </div>
    )
}

export default App;