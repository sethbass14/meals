import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Navbar'
import MealsContainer from './MealsContainer'
import Home from './Home'
import api from '../services/api'
import LogIn from './LogIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      auth: { currentUser: {} }
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      api.auth.getCurrentUser()
        .then(user => this.setState({ auth: {currentUser: user }}))
    }
  }

  handleLogIn = (user) => {
    const currentUser = { currentUser: user }
    localStorage.setItem('token', user.token)
    this.setState({ auth: currentUser })
  }

  handleLogOut = () => {
    localStorage.removeItem('token')
    this.setState({auth: {currentUser : {} }})
  }

  render() {
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.auth.currentUser}
          handleLogOut={this.handleLogOut}
        />
      < Route exact path="/login"  render={ (routerProps) =>
        <LogIn
          handleLogIn={this.handleLogIn}
          {...routerProps}/>
      }
      />
        < Route
          exact path="/"
          render={() => {
            const loggedIn = !!this.state.auth.currentUser.id;
            return loggedIn ? <Home /> : <Redirect to="/login" />
          }}
        />
        < Route exact path="/meals" component={MealsContainer} />
      </div>
    );
  }
}

export default App;
