import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from './pages/Book';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Manage from './forms/Manage';
import './App.css';


class App extends Component {
 
  render() {
    return (

      <Router>
      <div className="App">
      {/* Create a basic framework for the site, I need a header with navigation, a footer with more navigaion */}
      {/* Hamburger menu with all of the navigation locations*/}     
        <div className="Header">
          <div className="login">
          <nav role="navigation">
            <div id="menuToggle">

              {/* The checkbox makes it clickable and the three span tags are the three lines that collapse into an X on click */}
              {/* This is the hamburger menu */}
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <a href="/"><li>Home</li></a>
                <a href="/books"><li>Books</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact"><li>Contact</li></a>
                <a href="/manage"><li>Manage Books</li></a>
              </ul>
            </div>
          </nav>
          </div>
          
        </div>

        <div className="main">
          {/* Route paths */}
          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/manage" component={Manage} />
        
        </div>

        <div className="footer">

        <Link to="/About">
            <div className="about">
                <h3>About</h3>
            </div>
          </Link>

        <Link to="/Books">
          <div className="books">
            <h3>Books</h3>
          </div>
        </Link>

        <Link to="/Contact">
          <div className="contact">
              <h3>Contact</h3>
          </div>
        </Link>
        
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
