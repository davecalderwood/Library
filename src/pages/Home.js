import React, { Component } from "react";

export default class Home extends Component {
    render(){
    return (
        <div className="about">

        <h2>Welcome to the Home Page. This website was built to demonstrate my skill as a full stack web developer. This app is a library so I can track the books I own and which ones I have read. Navigate to the books page to see my list of books as well as photos of the cover, the author and what genre it belongs to.</h2>
        {/* Add a review section where I can write what I think of the books */}
        {/* Maybe add a summary section where you click on the image and it takes you to a new screen or modal that has all of the info about the book */}
        </div>
    )
    }
}
