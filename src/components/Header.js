import React from 'react'

const Header = (props) => {
return (
  <div className="header">
    <h1>Are you hungry?</h1>
    <button className="button" onClick={props.getRandomMeal}>Get Random Meal</button>
  </div>
  )
}

export default Header;