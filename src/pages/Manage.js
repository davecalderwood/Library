import React, { Component } from 'react';
import CreateBook from '../crud/CreateBook';
import DeleteBook from '../crud/DeleteBook';
import UpdateBook from '../crud/UpdateBook';


export default class Manage extends Component {
    state = {
        book: [],
        series: '',
        image: '',
        search: '',
        desc: '',
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
        const bookInfo = this.state.book.map((book) => {
            return (
            <div key={book._id} className="column parallax2">
                <div>
                    <h2>{book.book_series}<br/>
                    {book.book_title}<br/>
                        <img src={book.book_image}
                        alt={book.book_title} 
                        width="350px" 
                        height="500px" 
                        ></img><br/>
                    {book.book_author}<br/><br/></h2>
                </div>
                <div>
                    <UpdateBook 
                        book_series={book.book_series} 
                        book_title={book.book_title}
                        book_image={book.book_image}
                        book_author={book.book_author}
                        book_desc={book.book_desc}
                        id={book._id} 
                        refresh={this.search}
                    /><br/>
                    <DeleteBook id={book._id} title={book.book_title} refresh={this.search} />
                </div><br/><hr/>
            </div>
        )})
    return (
    <div className="manageBooks parallax2">
        <CreateBook /><br/>
            <form onSubmit={this.searcher} className="searchbar">
                <input type="search" placeholder="What book are you looking for?" onChange={event => this.setState({search: event.target.value})}/><br/>
            </form>
            <div class="item">
                {bookInfo}<br/>
            </div>
    </div>
        );
    }
}

