import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{
    

    //client of our app
    //server listens for this method and url
    //pass get method, it makes the call asynchoursly, promise will the be fulfilled, api comes back with response
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        books:[ ]
    }
    
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
