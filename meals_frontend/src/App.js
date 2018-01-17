import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Navbar } from './Navbar'


const URL = `http://localhost:3000/api/v1/`
class App extends Component {
  constructor() {
    super()

    this.state = {
      meals: [],
      ingredients: [],
      filteredMeals: []
    }
  }

  componentDidMount = () => {
    // this.fetchMeals();
    this.fetchIngredients();
  }

  // fetchMeals = () => {
  //   fetch(URL + 'meals')
  //     .then(resp => resp.json())
  //       .then(respMeals => this.setState({ meals : respMeals}))
  // }

  fetchIngredients = () => {
    fetch(URL + 'ingredients')
      .then(resp => resp.json())
        .then(ingredients => this.setState({ingredients: ingredients}))

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar />
        <h1>LET'S FUCKING COOK</h1>

      </div>
    );
  }
}

export default App;
