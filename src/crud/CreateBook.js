import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class CreateBook extends Component {
    constructor (props) {
      super(props);
      this.state = {
        book_title: '',
        book_genre: '',
        book_image: '',
        book_author: '',
        showModal: false,
      };
    }

    handleOpenModal = () => {
      this.setState({ showModal: true });
    }
    
    handleCloseModal = () => {
      this.setState({ showModal: false });
    }

  url = 'http://localhost:4000/book';

  create = async (evt) => {
    // evt.preventDefault()
      const result = await fetch(this.url, {
      method: 'POST', 
      body: JSON.stringify({
        book_title: this.state.book_title,
        book_image: this.state.book_image,
        book_author: this.state.book_author,
        book_genre: this.state.book_genre,
      }),
    })
    .then(console.log(this.data))

    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .then(this.setState({showModal: false}))
    // .then(this.props.refresh())
    .catch(error => console.error('Error:', error));
    this.handleCloseModal()
    console.log(result)
  }

    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Add Book</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Add Book"
             className="Modal"
          >
            <button onClick={this.handleCloseModal}>X</button>

            {/* title, image, author, genre */}
            <form className="addForm" onSubmit={this.create}>
            <center>
              <label>
                <input type="text" placeholder="Book Name" 
                onChange={event => this.setState({book_title: event.target.value})} required /><br/>
                <input type="text" placeholder="Book Image" 
                onChange={event => this.setState({book_image: event.target.value})} required /><br/>
                <input type="text" placeholder="Author" 
                onChange={event => this.setState({book_author: event.target.value})} required /><br/>
                <input type="text" placeholder="Book Genre" 
                onChange={event => this.setState({book_genre: event.target.value})} required /><br/>
              </label><br/>
                <input className="button-3d" type="submit" value="Submit" />
              </center>
            </form>
          </ReactModal>
        </div>
      );
    }
  }