import React from 'react';
import { withRouter } from 'react-router-dom'
import FlippableMeal from './FlippableMeal'

const MealBrowser = (props) => {
  const allMeals = props.meals ? props.meals.map((meal, index) => {
    return (
        <FlippableMeal
          key={index}
          meal={meal}
          currentUser={props.currentUser}
          handleAddMeal={props.handleAddMeal}
          handleDeleteUserMeal={props.handleDeleteUserMeal}
          />
      )
  }) :
  null

  return (
    <div className="ui grid container">
      {allMeals}
    </div>
  )
}

export default withRouter(MealBrowser)
