import React from "react";
import "./style.css"

function SearchBar(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-10 search-container">
                <form id="search-form">
                    <div className="form-group">
                        <label id="search-label">Search for a Book</label>
                        <input className="form-control" id="search-input" onChange={props.handleSearchInput}/>
                        <button className="btn btn-dark" id="search-button" onClick={props.handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar