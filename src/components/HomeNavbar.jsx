import React, { useState } from "react";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const buttonStyle = {
      backgroundColor: isHovered ? '#424242' : 'transparent',
      color: isHovered ? '#F1EDE4' : '#424242',
      cursor: isHovered ? 'pointer' : null
    };
  
    return { isHovered, handleMouseEnter, handleMouseLeave, buttonStyle };
  };

function HomeNavbar() {

    const button1 = useHover();
    const button2 = useHover();
    const button3 = useHover();
    const button4 = useHover();
    const button5 = useHover();
    const button6 = useHover();
    
    return (
        <div className="navbar">
            <button 
              href="/" 
              className="nav-links"
              onMouseEnter={button1.handleMouseEnter}
              onMouseLeave={button1.handleMouseLeave}
              style={button1.buttonStyle}
            ><TrackChangesIcon fontSize="large" /></button>
            <button
              href="/"
              className="nav-links"
              onMouseEnter={button2.handleMouseEnter}
              onMouseLeave={button2.handleMouseLeave}
              style={button2.buttonStyle}
            >PRODUCTS</button>
            <button
              href="/"
              className="nav-links"
              onMouseEnter={button3.handleMouseEnter}
              onMouseLeave={button3.handleMouseLeave}
              style={button3.buttonStyle}
            >BRANDS</button>
            <button
              href="/" 
              className="nav-links"
              onMouseEnter={button4.handleMouseEnter}
              onMouseLeave={button4.handleMouseLeave}
              style={button4.buttonStyle}
            >SALE</button>
            <button
              href="/"
              className="nav-links"
              onMouseEnter={button5.handleMouseEnter}
              onMouseLeave={button5.handleMouseLeave}
              style={button5.buttonStyle}
            >ACCESSORIES</button>
            <button
              href="/"
              className="nav-links"
              onMouseEnter={button6.handleMouseEnter}
              onMouseLeave={button6.handleMouseLeave}
              style={button6.buttonStyle}
            >LOOKS</button>
        </div>
    )
}

export default HomeNavbar;