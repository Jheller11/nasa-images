import React from 'react'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="loading">
      <ReactCssTransitionGroup
        transitionName="Stars"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <p>STAR</p>
      </ReactCssTransitionGroup>
    </div>
  )
}

export default LoadingScreen
