import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

const markdownContext = require.context('./posts', false, /\.md$/)
const markdownFiles = markdownContext
  .keys()
  .map(filename => markdownContext(filename))

class Blog extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map(file => fetch(file).then(res => res.text()))
    ).catch(err => console.error(err))

    this.setState({ posts: posts })
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post, i) => (
          <ReactMarkdown key={i} source={post} />
        ))}
      </div>
    )
  }
}

export default Blog
