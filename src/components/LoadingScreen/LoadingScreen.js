import React from 'react'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="loading">
      <ReactCssTransitionGroup
        transitionName="Stars"
        transitionAppear
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="star">&#x2605;</div>
      </ReactCssTransitionGroup>
    </div>
  )
}

export default LoadingScreen
