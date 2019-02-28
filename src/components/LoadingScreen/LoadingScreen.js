import React from 'react'
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.loading}>
      <span className="fa fa-spin fa-spinner fa-3x" />
    </div>
  )
}

export default LoadingScreen
