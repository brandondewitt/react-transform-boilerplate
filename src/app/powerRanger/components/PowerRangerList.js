import React, { Component } from 'react';
import { Link } from 'react-router';
import { Table } from 'react-bootstrap';

export class PowerRangerList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const powerRangers = this.props.powerRangers.map(ranger => (
      <tr key={ranger.id}>
        <td><Link to={`/powerRangers/${ranger.id}`}>{ranger.name}</Link></td>
        <td><Link className='btn btn-default' to={`/powerRangers/${ranger.id}/edit`}>Edit</Link></td>
        <td><button className='btn btn-danger' onClick={this.props.onDelete.bind(null, ranger.id)}>Delete</button></td>
      </tr>
    ));
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {powerRangers}
          </tbody>
        </Table>
      </div>
    );
  }
}
