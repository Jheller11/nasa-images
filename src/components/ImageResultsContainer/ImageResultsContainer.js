import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class ImageResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: this.props.results,
      columns: [
        {
          id: 'title',
          Header: 'Title',
          accessor: d => d.data[0].title
        },
        {
          id: 'creator',
          Header: 'Creator',
          accessor: d => d.data[0].center
        },
        {
          id: 'keywords',
          Header: 'Keywords',
          accessor: d => d.data[0].keywords,
          Cell: props => (
            <ul>
              <li>{props.value[0]}</li>
              <li>{props.value[1]}</li>
              <li>{props.value[2]}</li>
            </ul>
          )
        },
        {
          id: 'image',
          Header: 'Preview Image',
          accessor: d => d.links[0].href,
          Cell: props => (
            <div onClick={this.handleView}>
              <img className="preview" src={props.value} alt="search result" />
            </div>
          )
        },
        {
          id: 'collectionUrl',
          Header: 'Link to NASA Collection',
          accessor: d => d.href,
          Cell: props => (
            <a href={props.value} target="_blank" rel="noopener noreferrer">
              Collection
            </a>
          )
        },
        {
          id: 'saveButton',
          Header: 'Action',
          accessor: d => d.href,
          Cell: props => (
            <button onClick={this.handleSave} name={props.value}>
              Save
            </button>
          )
        }
      ]
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleView = this.handleView.bind(this)
  }

  handleSave(e) {
    let target = this.state.results.filter(result => {
      return result.href === e.target.name
    })
    this.props.saveImage(target[0])
  }

  handleView(e) {}

  render() {
    return (
      <div>
        <p className="description">
          *Click on a preview image to view full size.
        </p>
        <ReactTable
          data={this.state.results}
          defaultPageSize={5}
          columns={this.state.columns}
          className="-striped -highlight"
        />
      </div>
    )
  }
}

export default ImageResultsContainer
