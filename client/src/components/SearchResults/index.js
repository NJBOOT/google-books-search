import React from "react";
import "./style.css"

function SearchResults(props) {
    return (props.books.length === 0) ? (
        <div className="results-container justify-content-center">
            <div className="row search-header justify-content-center">
                <div className="col-10">
                    <h5>Search Results:</h5>
                    <p>No Results to Display</p>
                </div>
            </div>
        </div>) : (
            <div className="results-container justify-content-center">
                <div className="row search-header justify-content-center">
                    <div className="col-10">
                        <h5>Search Results:</h5>
                    </div>
                </div>
                {props.books.map(book => {
                    return (
                        <div className="row search-item justify-content-center" key={book.id}>
                            <div className="col-10 search-result">
                                <div className="row">
                                    <div className="col">
                                        <h6>{book.title}</h6>
                                        <p>Written By: {book.authors}</p>
                                    </div>
                                    <div className="col text-right">
                                        <a className="btn btn-dark view-book" href={book.link}>View</a>
                                        <button className="btn btn-dark save-book" data-id={book.id} onClick={(e)=>props.handleSaveButton(e)}>Save</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={book.image} alt={book.title}/>
                                    </div>
                                    <div className="col-9">
                                        <p>{book.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>

        )
}

export default SearchResults