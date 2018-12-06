import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class DeleteBook extends Component {
    constructor (props) {
        super(props);
        this.state = {
        //   book_title: '',
        //   book_image: '',
        //   book_series: '',
        //   book_author: '',
          showModal: false,
        };
      }
      handleOpenModal = () => {
        this.setState({ showModal: true });
        console.log(this.state)
      }
      
      handleCloseModal = () => {
        this.setState({ showModal: false });
      } 
      
  url = `http://localhost:4000/book/id/${this.props.id}`;

  delete = async (evt) => {
    // evt.preventDefault()
      const result = await fetch(this.url, {
      method: 'DELETE', 
    })
    .then(console.log(this.data))
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    // .then(this.props.refresh())
    .catch(error => console.error('Error:', error));
    this.handleCloseModal()
    console.log(result)
  }

    render() {
        return (
        <div>
          <button className="styles" onClick={this.handleOpenModal}>Delete Book</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Delete book"
             className="Modal"
          >
            <button onClick={this.handleCloseModal}>X</button>
            <center>
                <h2>Are you sure you want to delete: <br/><br/>{this.props.title}</h2>
                <form onSubmit={this.delete}>
                    <button className="button-3d" type="submit">Yes I want to Delete</button><br/><br/>
                    <button className="button-3d" onClick={this.handleCloseModal} >No I don't want to</button>
                </form>
            </center>
          </ReactModal>
        </div>
      );
    }
  }