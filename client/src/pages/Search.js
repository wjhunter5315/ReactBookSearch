import React from "react";
import SearchBar from "../components/SearchBar";
import BookResultsCard from "../components/BookResultsCard";
import SearchWindow from "../components/SearchWindow";

function Search() {
    return (
        <div>
            <SearchBar />
                <BookResultsCard>
                    
                </BookResultsCard>
        </div>
    );
}

export default Search;