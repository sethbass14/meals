import React from 'react';
import api from '../services/api'
import MealBrowser from './MealBrowser'
import Filter from './Filter'

const URL = `http://localhost:3000/api/v1/`
export default class MealsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      meals : [],
      searchTerm : '',
      filteredMeals : []
    }
  }

  componentDidMount() {
    api.meals.fetchMeals()
      .then(meals => this.setState({ meals }))
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => this.filteredMeals())
  }

  filteredMeals = () => {
    const term = this.state.searchTerm.toLowerCase()
    const filteredMeals = this.state.meals.filter(meal => meal.name.toLowerCase().includes(term) || meal.instructions.toLowerCase().includes(term))
    this.setState({filteredMeals})
  }

  getMeals = () => {
    if (this.state.filteredMeals.length) {
      return this.state.filteredMeals
    } else if (this.state.meals.length) {
      return this.state.meals
    } else {
      return null
    }
  }

  render() {

    return (
      <div className="meals-container">
        < Filter
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          />
        <br></br>
        {this.getMeals() ? < MealBrowser meals={this.getMeals()} /> : '...loading'}
      </div>
    )
  }
}

// {this.state.meals.length ? < MealBrowser meals={this.state.meals}/> : '...loading'}
