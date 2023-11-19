import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function HomeFooter() {
    return (
        <div className="footer">  
        <img className="footer-image" src="/images/footer-pic.png" alt="man looking down"/>
        <h1>COLLECTIVE</h1>
        <div>
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
        </div>
        </div>
    )
}

export default HomeFooter;