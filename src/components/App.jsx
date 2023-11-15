import React from "react";
import HomeNavbar from "./HomeNavbar.jsx";
import FirstHero from "./FirstHero.jsx";
import SecondHero from "./SecondHero.jsx";
import Divider from "./Divider.jsx";
import ThirdHero from "./ThirdHero.jsx";

function App() {
    return (
        <div className="main-div">
        <HomeNavbar />
        <FirstHero />
        <SecondHero />
        <Divider />
        <ThirdHero />
        </div>
    )
}

export default App;