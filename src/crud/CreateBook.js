import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class CreateBook extends Component {
    constructor (props) {
      super(props);
      this.state = {
        book_title: '',
        book_series: '',
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
        book_series: this.state.book_series,
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
          <button className="styles" onClick={this.handleOpenModal}>Add Book</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Add Book"
             className="Modal"
          >
            <button onClick={this.handleCloseModal}>X</button>

            <form className="addForm" onSubmit={this.create}>
            <center>
              <label>
                <input type="text" placeholder="Book Series" 
                onChange={event => this.setState({book_series: event.target.value})} required /><br/>
                <input type="text" placeholder="Book Name" 
                onChange={event => this.setState({book_title: event.target.value})} required /><br/>
                <input type="text" placeholder="Book Image" 
                onChange={event => this.setState({book_image: event.target.value})} required /><br/>
                <input type="text" placeholder="Author" 
                onChange={event => this.setState({book_author: event.target.value})} required /><br/>
                <textarea type="textarea" cols="40" rows="5" defaultValue={this.state.book_desc} className="description"
                onChange={event => this.setState({book_desc: event.target.value})} required /><br/>
              </label><br/>
                <input className="button-3d" type="submit" value="Submit" />
              </center>
            </form>
          </ReactModal>
        </div>
      );
    }
  }