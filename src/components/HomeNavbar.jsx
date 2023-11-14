import React from "react";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

function HomeNavbar() {
    return (
        <div className="navbar">
            <button href="/" className="nav-links"><TrackChangesIcon fontSize="large" /></button>
            <button href="/" className="nav-links">PRODUCTS</button>
            <button href="/" className="nav-links">BRANDS</button>
            <button href="/" className="nav-links">SALE</button>
            <button href="/" className="nav-links">ACCESSORIES</button>
            <button href="/" className="nav-links">LOOKS</button>
        </div>
    )
}

export default HomeNavbar;