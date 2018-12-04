import React, { Component } from 'react';


export default class DeleteBook extends Component {

  url = `http://localhost:4000/book/id/${this.props.id}`;

  delete = async (evt) => {
    evt.preventDefault()
      const result = await fetch(this.url, {
      method: 'DELETE', 
    })
    .then(console.log(this.data))
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    // .then(this.props.refresh())
    .catch(error => console.error('Error:', error));
    console.log(result)
    // this.props.refresh()
  }

  

    render() {
        return (
            <form onSubmit={this.delete}>
                <button>Delete</button>
            </form>
        );
    }
}
