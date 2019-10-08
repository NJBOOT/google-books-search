import React from "react"
import "./style.css"

function SavedResults(props) {
    return (props.savedBooks.length === 0) ? (
        <div className="unsaved-container justify-content-center">
            <div className="row justify-content-center">
                <div className="col-10 no-saved-book text-center">
                    <h2>No Saved Books</h2>
                </div>
            </div>
        </div>
    ) : (
            <div className="saved-container justify-content-center">
                {props.savedBooks.map(savedBook => {
                    return (
                        <div className="row justify-content-center" key={savedBook._id}>
                            <div className="col-10 saved-book">
                                <div className="row">
                                    <div className="col">
                                        <h5>{savedBook.title}</h5>
                                        <p>Written By: {savedBook.authors}</p>
                                    </div>
                                    <div className="col text-right">
                                        <a className="btn btn-dark view-book" href={savedBook.link}>View</a>
                                        <button className="btn btn-dark delete-book" data-id={savedBook._id}>Delete</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 image">
                                        <img src={savedBook.image} alt={savedBook.title}/>
                                    </div>
                                    <div className="col-9 description">
                                        <p>{savedBook.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

}

export default SavedResults