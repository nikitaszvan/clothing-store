import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function HomeFooter() {
    return (
        <div className="footer">  
            <h1 className="footer-h2">COLLECTIVE</h1>
            <div>
                <TwitterIcon />
                <InstagramIcon />
                <FacebookIcon />
            </div>
        </div>
    )
}

export default HomeFooter;