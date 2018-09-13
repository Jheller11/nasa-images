import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="home-info">
        <h4>Welcome</h4>
      </div>
      <div className="twitter">
        <a
          className="twitter-timeline"
          data-lang="en"
          data-height="600"
          href="https://twitter.com/NASA?ref_src=twsrc%5Etfw"
        >
          Tweets by NASA
        </a>{' '}
      </div>
    </div>
  )
}

export default Home
