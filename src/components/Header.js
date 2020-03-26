import React from 'react'

const Header = (props) => {
return (
  <div>
    <h1>Are you hungry?</h1>
    <button onClick={props.getRandomMeal}>Get Random Meal</button>
  </div>
  )
}

export default Header;