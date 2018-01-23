import React from 'react';

const MealShow = ({ meal }) => {
  console.log(meal)
  return (
    <div className="meal-show">
      <h1>{meal.name}</h1>
        <div className="ui two column grid container">
          <div className="row">
            <div className="column">
              <div className="ui card">
                <div className="image">
                  <img src={meal.image_url}/>
              </div>
            </div>
          </div>
          <div className="column instructions">
            <h3>Instructions</h3>
          <p>{meal.instructions}</p>
          </div>
        </div>
        <div>
          <h3>Ingredients</h3>
          {meal.ingredients.map((ingredient, i )=> <p key={i}>{ingredient.name}</p>)}
        </div>
      </div>
    </div>
    )
}

export default MealShow;
