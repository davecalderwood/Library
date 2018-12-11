import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class UpdateBook extends Component {
    constructor (props) {
      super(props);
      this.state = {
        // book: [],
        book_title: this.props.book_title,
        book_image: this.props.book_image,
        book_series: this.props.book_series,
        book_author: this.props.book_author,
        book_desc: this.props.book_desc,
        showModal: false,
      };
    }

    handleOpenModal = () => {
      this.setState({ showModal: true });
    }
    
    handleCloseModal = () => {
      this.setState({ showModal: false });
    }

    url = `http://localhost:4000/book/id/${this.props.id}`;

  update = async (evt) => {
    // evt.preventDefault()
      const result = await fetch(this.url, {
      method: 'PUT', 
      body: JSON.stringify({
        book_series: this.state.book_series,
        book_title: this.state.book_title,
        book_image: this.state.book_image,
        book_author: this.state.book_author,
        book_desc: this.state.book_desc,
      }),
    })
    // .then(console.log(this.data))

    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .then(this.setState({showModal: false}))
    .catch(error => console.error('Error:', error));
    this.handleCloseModal()
    console.log(result)
  }

    render () {
      return (
        <div>
          <button className="styles" onClick={this.handleOpenModal}>Update Book</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Update book"
             className="Modal"
          >
            <button onClick={this.handleCloseModal}>X</button>
            <center>
                <form className="addForm" onSubmit={this.update}>
                  <label>
                      <input type="text" defaultValue={this.props.book_series}
                      onChange={event => this.setState({book_series: event.target.value})} /><br/>
                      <input type="text" defaultValue={this.state.book_title}
                      onChange={event => this.setState({book_title: event.target.value})} required /><br/>
                      <input type="text" defaultValue={this.state.book_image}
                      onChange={event => this.setState({book_image: event.target.value})} required /><br/>
                      <input type="text" defaultValue={this.state.book_author}
                      onChange={event => this.setState({book_author: event.target.value})} required /><br/>
                      <textarea type="textarea" cols="40" rows="5" defaultValue={this.state.book_desc} className="description"
                      onChange={event => this.setState({book_desc: event.target.value})} required placeholder="Book Description" /><br/>
                    </label><br/>
                  <input className="button-3d" type="submit" value="Submit" />
                </form>
            </center>
          </ReactModal>
        </div>
      );
    }
  }