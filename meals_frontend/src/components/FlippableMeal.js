import React from 'react';
import MealCard from './MealCard'

export default class FlippableMeal extends React.Component {
  constructor() {
    super()

    this.state = {
      isFlipped: false
    }
  }

  //Do some iterating over the meals here to determine what kind of card to display.s
  render() {
    const mealCards = this.props.meals.map((meal, i) => <MealCard.MealCard key ={i} meal={meal}/>)
    return (
      <div>
        {mealCards}
      </div>
    )
  }


}
