import React, { Component } from 'react';
import * as PowerRangerActions from 'powerRanger/actions';
import { connect } from 'react-redux';
import { PowerRangerDetail } from 'PowerRangerDetail';

const powerRangerSelector = (state) => {
  return {
    powerRanger: state.powerRanger.listItem
  };
};

@connect(powerRangerSelector, PowerRangerActions)
export class Detail extends Component {
  constructor() {
    super();
    // this.state = {};
  }
  componentDidMount() {
    const { findById, params } = this.props;
    findById(params.id);
  }
  render() {
    let { powerRanger } = this.props;
    return (
      <div>
        <PowerRangerDetail powerRanger={powerRanger} />
      </div>
    );
  }
}
