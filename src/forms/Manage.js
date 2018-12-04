import React, { Component } from 'react';
import CreateBook from '../crud/CreateBook';
import DeleteBook from '../crud/DeleteBook';
import UpdateBook from '../crud/UpdateBook';


export default class Manage extends Component {
    state = {
        book: [],
        genre: '',
        image: '',
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
        const bookName = this.state.book.map((book) => {
            return (
            <div key={book._id}>
                <div>
                    {book.book_title}<br/>
                    {book.book_image}<br/>
                    {book.book_author}<br/>
                    {book.book_genre}
                </div>
                <div>
                    <UpdateBook id={book._id} refresh={this.search}/>
                    <DeleteBook id={book._id} refresh={this.search}/>
                </div><br/>
            </div>
        )})
    return (
    <div className="home parallax">
        <CreateBook />
            <form onSubmit={this.searcher} className="searchbar">
                <input type="search" placeholder="What are you looking for?" onChange={event => this.setState({search: event.target.value})}/><br/>
            </form>
            <div class="item">

                <h2>{bookName}</h2>

            </div>
    </div>
        );
    }
}

