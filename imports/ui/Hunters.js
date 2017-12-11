import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Hunters extends Component {
  render () {
    const columns = [{
      Header: 'Username',
      columns: [{
        Header: '[ - ]',
        accessor: 'username'
      }]
    }, {
      Header: 'Huntings',
      columns: [{
        Header: '[ - ]',
        accessor: 'scores.length'
      }]
    }, {
      Header: 'Score',
      columns: [{
        Header: '[ pts ]',
        accessor: 'score'
      }]
    }, {
      Header: 'Average',
      columns: [{
        Header: '[ pts/huntin ]',
        accessor: 'average'
      }]
    }]

    return (
      <div>
        <h1>Hunters</h1>
        <ReactTable data={this.props.scores} columns={columns} defaultPageSize={20} showPageSizeOptions={false} className='table table-striped' />
      </div>
    )
  }
}

export default Hunters
