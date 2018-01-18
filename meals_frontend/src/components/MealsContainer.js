import React from 'react';
import api from '../services/api'
import FlippableMeal from './FlippableMeal'

const URL = `http://localhost:3000/api/v1/`
export default class MealsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      meals : []
    }
  }

  componentDidMount() {
    api.meals.fetchMeals()
      .then(meals => this.setState({ meals }))
  }

  render() {
    return (
      <div className="meals-container">
        < FlippableMeal meals={this.state.meals}/>
      </div>
    )
  }
}
