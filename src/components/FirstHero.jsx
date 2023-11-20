import React, {useState} from "react";

const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const buttonStyle = {
      backgroundColor: isHovered ? '#EFEBE4' : '#C5B7A3',
      color: isHovered ? '#C5B7A3' : '#EFEBE4',
      cursor: isHovered ? 'pointer' : null,
      border: isHovered ? '5px solid #C5B7A3' : null,
      padding: isHovered ? '16px 25px 15px 26px' : '20px 30px 20px 30px'
    };
  
    return { isHovered, handleMouseEnter, handleMouseLeave, buttonStyle };
  };

function FirstHero() {
    const catalougeBtn = useHover();
    return (
        <div className="first-hero">
            <div className="first-hero-div1">
            <p className="first-hero-p1">TUESD</p>
            <h1 className="first-hero-h1">SE SEFOAM</h1>
            <p className="first-hero-p2">Get the collection the entire population <br/>is waiting for</p>
            <button 
                href="/"
                className="catalouge-btn"
                onMouseEnter={catalougeBtn.handleMouseEnter}
                onMouseLeave={catalougeBtn.handleMouseLeave}
                style={catalougeBtn.buttonStyle}
            >GET THE LOOK HERE</button>
            </div>
            <img className="first-hero-models" src="/images/first-hero-figures.png" alt="models wearing clothes"/>
            
        </div>
    )
}

export default FirstHero;