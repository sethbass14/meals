import React from 'react';
import api from '../services/api'

export default class LogIn extends React.Component {
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

  handleChange = (event) => {
    const newFields = { ...this.state.fields, [event.target.name]: event.target.value };
    this.setState({ fields: newFields })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    api.auth.login(this.state.fields)
      .then(resp => {
        if (resp.error) {
          this.setState({ error: true})
        } else {
          this.props.handleLogIn(resp)
          this.props.history.push('/')
        }
      })
  }

  render() {
    return (
      <div className='log-in'>
        {this.state.error ? <h1>Try Again</h1> : null}
        <form onSubmit={this.handleSubmit}>
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
