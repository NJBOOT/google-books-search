import React, {Component} from "react";
import Header from "../components/Header"

class NoMatch extends Component {
    
    render () {
        return (
            <div>
                <Header/>
                <div className="text-center">
                    <h2>Oops, 404 Error: There is nothing here to display</h2>
                </div>
            </div>
        )
    }
}

export default NoMatch