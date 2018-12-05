import React, { Component } from "react";

export default class Books extends Component {
    state = {
        book: [],
        genre: '',
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
                console.log(trimmed)
                await fetch(`http://localhost:4000/book/name/${trimmed}`)
                    .then(res => res.json())
                    .then(data => this.setState({ book: data }))
                console.log("search: ", this.state.book)
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
            <div key={book._id}>
                <div>
                    {book.book_title}<br/>
                    <img src={book.book_image} alt={book.book_title} width="250px" height="400px" ></img><br/>
                    {book.book_author}<br/>
                    {book.book_genre}
                </div><br/>
                <div>
                </div>
            </div>
        )})
    return (
    <div className="home">
            <form onSubmit={this.searcher} className="searchbar">
                <input type="search" placeholder="What book are you looking for?" onChange={event => this.setState({search: event.target.value})}/><br/>
            </form>
            <div class="item">
                <h2>{bookInfo}</h2>
            </div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
    </div>
        );
    }
}
