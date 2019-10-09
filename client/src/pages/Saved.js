import React, { Component } from "react";
import Header from "../components/Header"
import SavedResults from "../components/SavedResults";
import API from "../utils/API";

class Saved extends Component {

    state = {
        savedBooks: [],
        message: ""
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks = () => {
        API.getBooks().then(res => {
            console.log("Saved Book Results")
            this.setState({ savedBooks: res.data })
        })
    }

    handleBookDelete = (id) => {
        API.deleteBook(id).then(res => {
            console.log("Book Deleted")
            this.getBooks()
        })
    }

    render() {
        return (
            <div className="container-main">
                <Header />
                <SavedResults
                    savedBooks={this.state.savedBooks}
                    handleBookDelete={this.handleBookDelete}
                />
            </div>
        )
    }
}

export default Saved