import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prefer-stateless-function
export class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/receipts'>Receipts</Link>
          </li>
          <li>
            <Link to='/shopinglist'>Shoping List</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
