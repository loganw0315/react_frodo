import React, { Component } from "react";

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
          query: ""
        };
      }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    render() {
        return(
            <form action="/search/">
                <div className="input-group">
                    <input type="text" placeholder="Search" value={this.state.query} onChange={this.handleChange}/>
                    <button type="submit"></button>
                </div>
            </form>
        )
    }
}