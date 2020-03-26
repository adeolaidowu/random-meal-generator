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
  <div>
    <h3>{meal.strMeal}</h3>
    <p>{meal.strInstructions}</p>
    <img src={`${meal.strMealThumb}`} alt={`${meal.strMeal}-image`} />
    <ol>
      {ingredients.map((ingredient,index) => <li key={index+1}>{ingredient}</li>)}
    </ol>
    {meal.strCategory && <p>Category -> {meal.strCategory}</p>}
    {meal.strArea && <p>Area ->{meal.strArea}</p>}
    {meal.strTags && <p>Tags -> {meal.strTags}</p>}
    <MealVideo videoLink = {meal.strYoutube} title={meal.strMeal} />
  </div>
);
}

export default Meal;