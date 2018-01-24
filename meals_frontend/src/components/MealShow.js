import React from 'react';

const MealShow = ({ meal }) => {
  const sluggedUrl = meal.youtube_url.replace('watch?v=', 'embed/')
  return (
    <div className="meal-show">
      <div className="ui two column grid container">
        <div className="row">
          <div className="column">
          <a className="back" onClick={() => window.history.back()}>
            <i className="arrow circle left icon"></i>
            <p>Go Back</p>
          </a>
        </div>
        <div className="column">
        <h1>{meal.name}</h1>
        </div>
        </div>
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
        <div className="row">
          <div className="column ingredient-list">
            <h3>Ingredients</h3>
            {meal.ingredients.map((ingredient, i )=> <p key={i}>{ingredient.name}</p>)}
          </div>
          <div className="column meal-video">
            { sluggedUrl === 'none' ? null
              :
            <iframe src={sluggedUrl} width="420" height="315" frameBorder="0" allowFullScreen></iframe>
            }
        </div>
      </div>
      </div>
    </div>
    )
}

export default MealShow;
