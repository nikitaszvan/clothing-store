import React, { useState } from "react";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

function HomeNavbar() {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovered ? '#424242' : '#F1EDE4',
        color: isHovered ? '#F1EDE4' : '#424242'
      };
    
    return (
        <div className="navbar">
            <button href="/" className="nav-links" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}
          ><TrackChangesIcon fontSize="large" /></button>
            <button href="/" className="nav-links" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}>PRODUCTS</button>
            <button href="/" className="nav-links" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}>BRANDS</button>
            <button href="/" className="nav-links" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}>SALE</button>
            <button href="/" className="nav-links" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}>ACCESSORIES</button>
            <button href="/" className="nav-links" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}>LOOKS</button>
        </div>
    )
}

export default HomeNavbar;