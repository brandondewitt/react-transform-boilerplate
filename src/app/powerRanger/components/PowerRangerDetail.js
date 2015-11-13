import React, { Component } from 'react';
import { Link } from 'react-router';

export class PowerRangerDetail extends Component {
  render() {
    let { powerRanger } = this.props;
    return (
      <div>
        <Link className='btn btn-default' to={`/powerRangers/${powerRanger.id}/edit`}>Edit</Link>
        <div>id: {powerRanger.id}</div>
        <div>name: {powerRanger.name}</div>
      </div>
    );
  }
}
