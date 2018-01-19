import React from 'react';
import FlippableMeal from './FlippableMeal'

const MealBrowser = (props) => {
  const allMeals = props.meals.map((meal, index) => <FlippableMeal key={index} meal={meal}/>)

  return (
    <div className="ui grid container">
      {allMeals}
    </div>
  )
}

export default MealBrowser
