import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Navbar'
import MealsContainer from './MealsContainer'
import Home from './Home'
import api from '../services/api'
import LogIn from './LogIn'
import SignUp from './SignUp'

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
    api.auth.destroyCurrentUser()
    this.setState({auth: {currentUser : {} }})
  }

  handleAddMeal = (meal) => {
    api.userMeals.postNewUserMeal({user_id: this.state.auth.currentUser.id, meal_id: meal.id})
      .then(user => this.setState({ auth: {currentUser: user }}))
  }

  handleDeleteUserMeal = (meal) => {
    api.userMeals.deleteUserMeal(meal.id)
      .then(user => this.setState({ auth: {currentUser: user}}))
  }

  render() {
    console.log(this.state.auth.currentUser)
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.auth.currentUser}
          handleLogOut={this.handleLogOut}
        />
      <div id="content">
        <Switch>
          <Route exact path="/login"  render={ (routerProps) =>
            <LogIn
              handleLogIn={this.handleLogIn}
              {...routerProps}/>
          }
          />
        <Route exact path="/signup" render={ (routerProps) =>
              <SignUp
                handleLogIn={this.handleLogIn}
                {...routerProps}
              />
            }
        />
          <Route
            exact path="/"
            render={() => {
              const loggedIn = !!localStorage.token;
              return loggedIn ? <Home currentUser={this.state.auth.currentUser} handleDeleteUserMeal={this.handleDeleteUserMeal}/> : <Redirect to="/login" />
            }}
          />
        <Route path="/meals" render={(routerProps) => {
            return <MealsContainer
              {...routerProps}
              currentUser={this.state.auth.currentUser}
              handleAddMeal={this.handleAddMeal}
              />
          }}
          />
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
