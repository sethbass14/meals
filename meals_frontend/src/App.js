import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Navbar } from './Navbar'
import MealsContainer from './MealsContainer'
import Home from './Home'


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

  fetchIngredients = () => {
    fetch(URL + 'ingredients')
      .then(resp => resp.json())
        .then(ingredients => this.setState({ingredients: ingredients}))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        < Home / >
        < MealsContainer/>

      </div>
    );
  }
}

export default App;
