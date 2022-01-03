import React, { Component } from "react";
import Input from "./Input";

export default class Header extends Component {

   
    render() {
        return(
            <nav className="navbar">
                <div className="navbar-header">
                    <img src="Devmountain Logo Here" alt="Devmountain Logo" />
                </div>
                <div className="navbar-center">
                    <span className="navbar-cohort">"Cohort Here"</span>
                </div>
                <div className="searchbar">
                    <Input />
                </div>
                <div className="navbar-right">
                    <div className="navbar-student">
                        <span className="navbar-name">"Name"</span>
                        <img className="navbar-photo" src="Photo src" alt="Student Photo" />
                        <span>
                            <img src="(dropdown-icon)" alt="" />
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}