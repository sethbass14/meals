import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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

  // This code is not needed yet
  componentDidMount = () => {
    api.ingredients.fetchIngredients()
      .then(ingredients => this.setState({ ingredients }))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        < Route exact path="/" component={Home} />
        < Route exact path="/meals" component={MealsContainer} />
      </div>
    );
  }
}

export default App;
