import React from 'react';

export default class MealContainer extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  fetchMeals = () => {
    fetch(URL + 'meals')
      .then(resp => resp.json())
        .then(respMeals => this.setState({ meals : respMeals}))
  }
}
