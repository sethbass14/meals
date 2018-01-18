import React from 'react';

const URL = `http://localhost:3000/api/v1/`
export default class MealsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      meals : []
    }
  }

  componentDidMount() {
    this.fetchMeals()
  }

  fetchMeals = () => {
    fetch(URL + 'meals')
      .then(resp => resp.json())
        .then(respMeals => this.setState({ meals : respMeals}))
  }

  render() {
    console.log(this.state)
    return (
      <div className="meals-container">

      </div>
    )
  }
}
