import React, { Component } from "react";

export default class Contact extends Component {
    render(){
    return (
        <div className="contactPage">
        <div className="filler">filler</div>
        <div class="center">
            <div class="page">
                <h1 className="story">Dave Calderwood</h1><hr/><br/><br/>
                <p className="story">davidhcalderwood@gmail.com</p>
                <p className="story">(503)858-5790</p><br/><hr/>
                <p className="story">
                    <a className="linkedin" href="https://www.linkedin.com/in/david-calderwood/" target="_blank" rel="noopener noreferrer">linkedin </a>
                    <a className="linkedin" href="https://github.com/davecalderwood" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p><br/>
                <p className="story">Phone # is a Portland address, but I live in Herriman, Utah.</p>
            </div>
            </div>
        </div>
    )
    }
}
