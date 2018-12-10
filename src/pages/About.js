import React, { Component } from "react";

export default class About extends Component {
    render(){
    return (
        <div className="parallax">
        <div className="filler">filler</div>
                {/* <img className="photos" src="Waterski.jpg" alt="waterski"></img> 
                <img className="image" src="Backflip.jpg" alt="backflip"></img> */}
            
            <div className="storybox">
                <p className="story">Born in Walnut Creek, California on October 29, 1995. We Moved to Portland, Oregon when I was 1 and that is where I grew up. I grew up playing Lacrosse and Football. I love to wakeboard, waterski and snowboard. I graduated high-school in 2014 and moved to Utah to attend school at Utah Valley University</p>

                <p className="story">At UVU I studied History, Physics and spent most of my time as an Aviation Science major. I left UVU after not being able to get my medical cleared from the FAA and went to Helio Training, on the suggestion from a friend, to become a web developer. I have always had a fascination with computer science and I wanted to get the skills necessary to get a job as a developer.</p>

                <p className="story">I absolutly love to read, which is what drove me to create this website for myself. I have always wanted to have an enormous library in my home and this will help me track which ones I have. My favorite books are The Lord of the Rings by J.R.R. Tolkien. </p>

                <p className="story">Fantasy books are my favorite as they allow me to escape reality and get pulled into another world. The way Larry Correia pulls you into his world in the Saga of the Forgotten Warrior is wonderful. You fear and root for the characters.</p>
            </div>
        </div>
    )
    }
}
