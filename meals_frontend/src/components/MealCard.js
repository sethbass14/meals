import React from 'react';
import { Link } from 'react-router-dom'

const MealCard = (props) => {
  return (
    <div className="ui card" >
      <Link to={`/meals/${props.meal.id}`} className="image">
        <img src={props.meal.image_url} alt={props.meal.name}/>
      </Link>
      <div className="content">
        <a onClick={props.handleFlip}>{props.meal.name}</a>
      </div>
    </div>
  )
}

const FlippedMealCard = (props) => {
  return (
    <div className="ui card" >
      <div className="image" onClick={() => console.log(props.meal.id)}>
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
