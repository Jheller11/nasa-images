import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class VideoResultsContainer extends Component {
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
        //  keywords not on all videos -> figure out how to handle
        // {
        //   id: 'keywords',
        //   Header: 'Keywords',
        //   accessor: d => d.data[0].keywords,
        //   Cell: props => (
        //     <ul>
        //       <li>{props.value[0]}</li>
        //       <li>{props.value[1]}</li>
        //       <li>{props.value[2]}</li>
        //     </ul>
        //   )
        // },
        {
          id: 'collectionUrl',
          Header: 'Link to NASA Collection',
          accessor: d => d.href,
          Cell: props => (
            <p>
              <a href={props.value} target="_blank">
                View
              </a>
            </p>
          )
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <p style={{ backgroundColor: 'pink', padding: 5, borderRadius: 5 }}>
          This application cannot currently show video previews. Please use the
          link in the far column to find videos.
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

export default VideoResultsContainer
