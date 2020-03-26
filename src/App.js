import React, { Component } from 'react';
import Header from './components/Header';
import Meal from './components/Meal';
import './App.css';

class App extends Component {
  state = {
    meal: []
  }

getRandomMeal = (e) => {
  e.preventDefault();
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(meal => this.setState(() => ({meal: meal.meals})))
  .catch(error => console.log(error))
  setTimeout(() => {console.log(this.state.meal)}, 2500)
}
  render(){
    return (
      <div>
      <Header getRandomMeal={this.getRandomMeal} />
      {this.state.meal.length > 0 && <Meal meal={this.state.meal[0]} />}
      </div>
      );
  }
}



export default App;
