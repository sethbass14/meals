import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  const loggedIn = props.currentUser.id
  return (
    <div className="ui menu">
      <Link to="/" className="item">
        <h2>Get Cooking</h2>
      </Link>
      {loggedIn? (<a className="item back" onClick={() => window.history.back()}>
        <i className="arrow circle left icon"></i>
        <p>Go Back</p>
      </a>
      ) : (null)}
      <div className="right menu">
        {loggedIn ? (
          <div className="item">
            <p className="nav">{`Welcome ${props.currentUser.username}!`}</p>
          </div>
        ) : null
        }
        {loggedIn ? (
          <div className="item" onClick={() => {
              props.history.push('/login')
              props.handleLogOut()
            }
            }>
            <p className="nav">Log Out</p>
          </div>
        ) : (
          <Link to="/login" className="item">
            <p className="nav">Log In</p>
          </Link>
        )}
        <Link to="/meals" className="item">
          <p className="nav">Meals</p>
        </Link>
        <Link to="/meals/new" className="item">
          <p className='nae'>New Meal</p>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
