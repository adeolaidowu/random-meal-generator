import React from 'react';

const MealVideo = ({videoLink, title}) => {
  return (
    <div>
    <h3>Watch Recipe Video:</h3>
    <iframe className="meal-video" title={title}
    src={`https://www.youtube.com/embed/${videoLink.slice(-11)}`}
    frameBorder="0" allow="accelerometer;
    autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
    </div>
  )
}

export default MealVideo;