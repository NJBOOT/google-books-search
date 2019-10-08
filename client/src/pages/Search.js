import React, { Component } from "react";
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"
import API from "../utils/API"

class Search extends Component {

    state = {
        search: "",
        books: [],
        message: ""
    }

    handleSearchInput = (event) => {
        this.setState({ search: event.target.value })
        console.log(this.state.search)
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Submit Button Clicked")
        API.googleBookSearch(this.state.search).then((res) => {
            let items = res.data.items
            let booksArray = items.map(item => {
                item = {
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors[0],
                    description: item.volumeInfo.description,
                    image: item.volumeInfo.imageLinks.thumbnail,
                    link: item.volumeInfo.previewLink
                }
                return item
            })
            console.log(booksArray)
            this.setState({ books: booksArray, message: "Books Successfully Added" })
            console.log(this.state.books)
        }).catch(err => this.setState({books: [], message: "An Error Occurred" }))
    }

    handleSaveButton = (event) => {
        event.preventDefault();
        let bookID = event.target.dataset.id
        const chosenBook = this.state.books.find(book => book.id === bookID)
        console.log(chosenBook)
        API.saveBook(chosenBook)

    }

    render() {
        return (
            <div className="container-main">
                <Header />
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleSearchInput={this.handleSearchInput}
                />
                <SearchResults books={this.state.books} handleSaveButton={this.handleSaveButton}/>
            </div>
        )
    }
}

export default Search