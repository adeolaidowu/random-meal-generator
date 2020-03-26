import React from 'react'
import MealVideo from './MealVideo';

const Meal = ({ meal }) => {
  let ingredients = [];
  for(let i = 1; i <= 20; i++){
    if(meal[`strIngredient${i}`]){
      ingredients.push(meal[`strIngredient${i}`] + " - " + meal[`strMeasure${i}`]);
    }else {
      break;
    }
  }
return (
  <div className="wrapper">
    <div className="meal-container">
      <div className="meal__info">
        <h3>{meal.strMeal}:</h3>
        <p>{meal.strInstructions}</p>
      </div>
      <div>
        <img src={`${meal.strMealThumb}`} alt={`${meal.strMeal}-image`} className="meal__img" />
        {meal.strCategory && <p><span>Category:</span> {meal.strCategory}</p>}
        {meal.strArea && <p><span>Area:</span> {meal.strArea}</p>}
        {meal.strTags && <p><span>Tags:</span> {meal.strTags.split(",").join(", ")}</p>}
        <h3>Ingredients:</h3>
        <ol>
          {ingredients.map((ingredient,index) => <li key={index+1}>{ingredient}</li>)}
        </ol>
      </div>
    </div>
    <div className="ingredients-container">
      <div>
        {meal.strYoutube && <MealVideo videoLink = {meal.strYoutube} title={meal.strMeal} />}
      </div>
    </div>
  </div>
);
}

export default Meal;