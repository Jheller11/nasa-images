import React from 'react'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="loading">
      <ReactCssTransitionGroup
        transitionName="Rocket"
        transitionAppear
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <img src="/rocket.png" alt="loading" />
      </ReactCssTransitionGroup>
    </div>
  )
}

export default LoadingScreen
