import React from 'react';

const MealNew = () => {
  return (
    <div className="new-meals">
      <h1>Add a new Meal!</h1>
      <form>
        <input type="text" name="name" placeholder="Meal Name"></input>
        <br></br>
        <label>Instructions</label>
        <br></br>
        <textarea name="instructions"></textarea>
        <br></br>
        <input type="text" name="image_url" placeholder="Image Url"></input>
        <br></br>
        <input type="text" name="youtube_url" placeholder="YouTube url"></input>
        <br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  )
}

export default MealNew
