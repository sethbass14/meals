import React from 'react';

const MealCard = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={props.meal.image_url}/>
      </div>
      <div className="content">
        <p>{props.meal.name}</p>
      </div>
    </div>
  )
}

export default {
  MealCard
}
