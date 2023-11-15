import React from "react";

function TextBox(props) {
    return (
        <div className="text-box">
        <h2 className="text-box-header">{props.title}</h2>
        <div className="text-box-p-1-2">
        <p className="text-box-p-1">{props.p_1}</p>
        <p className="text-box-p-2">{props.p_2}</p>
        </div>
        <p className="text-box-p-3">{props.p_3}</p>
        </div>
    )
}

export default TextBox;