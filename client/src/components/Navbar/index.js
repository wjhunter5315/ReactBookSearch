import React from "react";

function Navbar() {
    return (
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Google Books</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Search</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="saved">Saved</a>
            </li>
        </ul>
    )
}

export default Navbar;