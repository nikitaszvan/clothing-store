import React from "react";

function OutfitCard(props) {
    return (
        <div className="outfit-card-container">
            <img className={props.class_name} src={props.src} alt={props.alt}/>
            <div className="outfit-card-p-1-2-container">
                <p className="outfit-card-p-1">{props.p_1}</p>
                <p className="outfit-card-p-2">{props.p_2}</p>
            </div>
            <div className="outfit-card-h2-1-2-container">
                <p className="outfit-card-h2-1">{props.h2_1}</p>
                <p className="outfit-card-h2-2">{props.h2_2}</p>
            </div>
            <div className="outfit-card-p-3-4-container">
                <p className="outfit-card-p-3">{props.p_3}</p>
                <p className="outfit-card-p-4">{props.p_4}</p>
            </div>

        </div>
    )
}

export default OutfitCard;