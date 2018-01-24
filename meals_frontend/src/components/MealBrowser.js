import React from 'react';
import FlippableMeal from './FlippableMeal'

const MealBrowser = (props) => {
  const allMeals = props.meals.map((meal, index) => {
    return (
        <FlippableMeal
          key={index}
          meal={meal}
          currentUser={props.currentUser}
          handleAddMeal={props.handleAddMeal}
          />
      )
  })

  return (
    <div className="ui grid container">
      {allMeals}
    </div>
  )
}

export default MealBrowser
