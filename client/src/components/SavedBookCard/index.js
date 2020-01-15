import React from "react";

function SavedBookCard() {
    return (
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            </img>
            <div class="card-body">
                <h5 class="card-title">Book Title Here</h5>
                <h5 class="card-title">Author Here</h5>
                <p class="card-text">Description Here.</p>
                <a href="#" class="btn btn-primary">View</a>
                <a href="#" class="btn btn-primary">Delete</a>
            </div>
        </div>
    );
}

export default SavedBookCard;