import React from "react";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

function HomeNavbar() {
    return (
        <nav className="navbar">
            <div className="nav-div">
            <h1 href="/" className="nav-links"><TrackChangesIcon fontSize="large" /></h1>
            <h1 href="/" className="nav-links">PRODUCTS</h1>
            <h1 href="/" className="nav-links">BRANDS</h1>
            <h1 href="/" className="nav-links">SALE</h1>
            <h1 href="/" className="nav-links">ACCESSORIES</h1>
            <h1 href="/" className="nav-links">LOOKS</h1>
            </div>
        </nav>
    )
}

export default HomeNavbar;