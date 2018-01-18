import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="ui menu">
      <Link to="/" className="item">
        <h2>Get Cooking</h2>
      </Link>
      <div className="right menu">
        <Link to="/signup" className="item">
          <p className="nav">Sign Up</p>
        </Link>
        <Link to="/meals" className="item">
          <p className="nav">Meals</p>
        </Link>
      </div>
    </div>
  )


}
