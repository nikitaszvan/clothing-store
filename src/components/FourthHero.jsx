import React from "react";
import OutfitCard from "./OutfitCard.jsx"

function FourthHero() {

    const sam_para_1="consectetur adipiscing elit. Quisque volutpat magna quis. ec suscipit metus molestie faucibuSed vel tortor ut dui consectetur suscipit. Sed malesuada finibus iaculis. tristique nec nisl. Curabitur eget justo sollicitudin,";
    const sam_para_2="Nunc rhoncus metus egestas, euismod libero nec, volutpat justo. In vulputate";
    return (
        <div className="fourth-hero">
            <div className="first-column-4-hero">
                <p className="first-c-p-1">SABRE</p>
                <h2 className="first-c-h2">NOTTER DAME</h2>
                <p className="first-c-p-2">consectetur adipiscing elit expisu epxa.</p>
                <p className="first-c-p-3">{sam_para_1}</p>
                <p className="first-c-p-4">{sam_para_2}</p>
            </div>
            <div className="second-column-4-hero">
                <h2 className="second-c-h2">SIBERIA</h2>
                <p className="second-c-p-1">SONERA</p>
                <p className="second-c-p-2">
                    Nunc rhoncus metus <br/>
                    egestas, e, Nunc rhoncus <br/>
                    metus egestas, e, Nunc rhoncus <br/>
                    egestaseas <br/>
                    Nunc rhoncus metus egestasas
                    </p>
                <p className="second-c-p-3">
                    to sollic <br/>
                    itudin, rutrum magna <br/>
                    tempus magna. Maecenas <br/>
                    porta erat, at eleifend mdasf<br/>
                    Quisque sit amet
                    </p>
            </div>
            <div className="third-column-4-hero">
            <OutfitCard 
            class_name="hoodie-pic"
            src="/images/hoodie_3.png"
            alt="hoodie 3"
            p_1="GALETO"
            p_2="IXX"
            h2_1="GREYY ATOMM"
            h2_2="EDENO"
            p_3="TECHNO GEOGRAPHE JETS"
            p_4="ELECTROCRYR"/>
            <OutfitCard
            class_name="hoodie-pic"
            src="/images/hoodie_4.png"
            alt="hoodie 4"
            p_1="GALETO"
            p_2="IXX"
            h2_1="GREYY ATOMM"
            h2_2="EDENO"
            p_3="TECHNO GEOGRAPHE JETS"
            p_4="ELECTROCRYR"/>
            </div>

        </div>
    )
}

export default FourthHero;