import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Saved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      saved: this.props.saved,
      columns: [
        {
          Header: 'Link',
          accessor: 'link',
          Cell: props => <a href={props.value}>View Collection</a>
        }
      ]
    }
  }
  render() {
    return (
      <ReactTable
        data={this.state.saved}
        defaultPageSize={5}
        columns={this.state.columns}
      />
    )
  }
}

export default Saved
