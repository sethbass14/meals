import React from 'react';
import api from '../services/api'

export default class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      error: false,
      fields: {
        username: '',
        password: '',
      }
    }
  }

  handleChange = event => {
    const newFields = {...this.state.fields, [event.target.name]: event.target.value}
    this.setState({ fields: newFields })
  }

  handleNewUserSubmit = event => {
    event.preventDefault()
    api.users.postNewUser(this.state.fields)
    .then(resp => {
      if (resp.error) {
        this.setState({ error: true})
      } else {
        api.auth.login(this.state.fields).then(resp => {
          this.props.handleLogIn(resp)
          this.props.history.push('/')    
        })
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewUserSubmit}>
          <h1>Sign Up to Create a New Account</h1>
          <label>Username</label>
          <input type="text" placeholder="username" name="username" onChange={this.handleChange}></input>
          <br></br>
          <label>Password</label>
          <input type="password" placeholder="password" name="password" onChange={this.handleChange}></input>
          <br></br>
          <input type="submit" className="ui button"></input>
        </form>
      </div>
    )
  }

}
