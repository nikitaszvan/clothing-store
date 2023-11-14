import React from "react";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

function HomeNavbar() {
    return (
        <nav class="navbar">
            <div class="nav-div">
            <h1 href="/" class="nav-links"><TrackChangesIcon fontSize="large" /></h1>
            <h1 href="/" class="nav-links">PRODUCTS</h1>
            <h1 href="/" class="nav-links">BRANDS</h1>
            <h1 href="/" class="nav-links">SALE</h1>
            <h1 href="/" class="nav-links">SALE</h1>
            </div>
        </nav>
    )
}

export default HomeNavbar;