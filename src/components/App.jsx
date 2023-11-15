import React from "react";
import HomeNavbar from "./HomeNavbar.jsx";
import FirstHero from "./FirstHero.jsx";
import SecondHero from "./SecondHero.jsx";
import Divider from "./Divider.jsx";

function App() {
    return (
        <div className="main-div">
        <HomeNavbar />
        <FirstHero />
        <SecondHero />
        <Divider />
        </div>
    )
}

export default App;