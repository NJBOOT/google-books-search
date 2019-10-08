import React, {Component} from "react";
import Header from "../components/Header"
import SavedResults from "../components/SavedResults";
import API from "../utils/API";

class Saved extends Component {

    state={
        savedBooks: [],
        message: ""
    }

componentDidMount () {
    this.getBooks()
}

getBooks = () => {
    API.getBooks().then(res=>{
        console.log(res.data)
        this.setState({savedBooks: res.data})
    })
}

    render () {
        return (
            <div className="container-main">
                <Header/>
                <SavedResults
                savedBooks = {this.state.savedBooks}
                />
            </div>
        )
    }
}

export default Saved