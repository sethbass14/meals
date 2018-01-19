import React from 'react';

const MealCard = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={props.meal.image_url} alt={props.meal.name}/>
      </div>
      <div className="content">
        <a onClick={props.handleFlip}>{props.meal.name}</a>
      </div>
    </div>
  )
}

const FlippedMealCard = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={props.meal.image_url} alt={props.meal.name}/>
      </div>
      <div className="content">
        <a onClick={props.handleFlip}>{props.meal.name}</a>
        <p>{props.meal.instructions}</p>
      </div>
    </div>
  )
}

export default {
  MealCard,
  FlippedMealCard
}
