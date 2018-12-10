import React, { Component } from "react";
// import Drop from '../components/Dropdown';

export default class Books extends Component {
    state = {
        book: [],
        series: '',
        image: '',
        author: '',
        search: ''
    }
    
    // Get all books
    grabBook = async () => {
        await fetch('http://localhost:4000/book')
            .then(res => res.json())
            .then(data => this.setState({book: data}))
        console.log('all results: ', this.state.book)
    }

    componentDidMount = async () => {
        await this.grabBook()
    }

    // Search for a specific book(s)
    search = async () => {
        // If empty return all books
        if (this.state.search === ''){
            this.grabBook()
        }
        else if (this.state.search === ' '){
            this.grabBook()
        }
            else {
                const trimmed = this.state.search.replace(/\s/, "")
                await fetch(`http://localhost:4000/book/name/${trimmed}`)
                    .then(res => res.json())
                    .then(data => this.setState({ book: data }))
            }
    }
    // searcher refreshes the page after deletion
    searcher = (event) => {
        event.preventDefault()
        this.search()
    }

    render(){
        const bookInfo = this.state.book.map((book) => {
            return (
            <div key={book._id} className="column">
                <h2>{book.book_series}<br/>
                {book.book_title}<br/>

                <div class="flip-box">
                    <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={book.book_image} 
                        alt={book.book_title} 
                        width="350px" 
                        height="500px" 
                        ></img><br/>
                    </div>
                        <div className="flip-box-back">
                        {book.book_desc}
                        </div>
                    </div>
                </div>

                {book.book_author}</h2><hr/>
                    
            </div>
        )})
    return (
    <div className="book">
        <div className="filler">filler</div>
            <form onSubmit={this.searcher} className="searchbar">
                <input type="search" placeholder="What book are you looking for?" onChange={event => this.setState({search: event.target.value})}
                /><br/>
            </form>
            <div class="item">
                {bookInfo}
            </div>
    </div>
        );
    }
}
