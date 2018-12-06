import React from 'react';

export default class Drop extends React.Component {

  render() {
    return (
        <li class="nav-item nav-item-dropdown">
        <a class="dropdown-trigger" href="menu">Search by:</a>
        <ul class="dropdown-menu">
          <li class="dropdown-menu-item">
            <a href="title">Book Title</a>
          </li>
          <li class="dropdown-menu-item">
            <a href="series">Book Series</a>
          </li>
          <li class="dropdown-menu-item">
            <a href="author">Author</a>
          </li>
        </ul>
      </li>
    );
  }
}