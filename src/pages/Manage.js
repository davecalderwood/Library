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

    // Image = () => {
    //     <img src={book_image} />
    // }

    render(){
        const bookInfo = this.state.book.map((book) => {
            return (
            <div key={book._id}>
                <div>
                    {book.book_title}<br/>
                    <img src={book.book_image} alt={book.book_title} width="250px" height="400px" ></img><br/>
                    {book.book_author}<br/>
                    {book.book_genre}
                </div>
                <div>
                    <UpdateBook id={book._id} refresh={this.search} /><br/>
                    <DeleteBook id={book._id} title={book.book_title} refresh={this.search} />
                </div><br/>
            </div>
        )})
    return (
    <div>
        <CreateBook /><br/>
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

