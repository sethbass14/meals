import React from 'react';
import api from '../services/api'

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

      </div>
    )
  }
}
