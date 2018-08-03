import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class ResultsContainer extends Component {
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
            <img className="preview" src={props.value} alt="search result" />
          )
        },
        {
          id: 'collectionUrl',
          Header: 'Link to NASA Collection',
          accessor: d => d.href,
          Cell: props => (
            <a href={props.value} target="_blank">
              Collection
            </a>
          )
        }
      ]
    }
  }
  render() {
    return (
      <ReactTable
        data={this.state.results}
        defaultPageSize={5}
        columns={this.state.columns}
      />
    )
  }
}

export default ResultsContainer
