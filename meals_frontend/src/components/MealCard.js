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
        {props.isFlipped ?   <p>{props.meal.instructions}</p> : null}
      </div>
      <div className="extra content">
        <a>
          {props.currentUser ? RemoveMealCSS() : AddMealCSS()}
        </a>
      </div>
    </div>
  )
}

const RemoveMealCSS = () => {
  return (
    <div>
      <i className="minus circle icon"></i>
      <p>Remove Meal</p>
    </div>
  )
}

const AddMealCSS = () => {
  return (
    <div>
      <i className="add circle icon"></i>
      <p>Add Meal</p>
    </div>
  )
}

export default MealCard
