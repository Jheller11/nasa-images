import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Blog.module.css'

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
    console.log(this.state.posts)
    return (
      <div className={styles.postList}>
        {this.state.posts.map((post, i) => (
          <div key={i} className={styles.post}>
            <ReactMarkdown source={post} />
          </div>
        ))}
      </div>
    )
  }
}

export default Blog
