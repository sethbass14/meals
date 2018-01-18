import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Navbar } from './Navbar'
import MealsContainer from './MealsContainer'
import Home from './Home'
import api from '../services/api'


class App extends Component {
  constructor() {
    super()

    this.state = {
      ingredients: [],
    }
  }

  componentDidMount = () => {
    api.ingredients.fetchIngredients()
      .then(ingredients => this.setState({ ingredients }))
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
