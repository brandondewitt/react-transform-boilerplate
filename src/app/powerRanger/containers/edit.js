import React, { Component } from 'react';
import * as PowerRangerActions from 'powerRanger/actions';
import { connect } from 'react-redux';
import { PowerRangerForm } from 'PowerRangerForm';
import { pushState } from 'redux-router';
import {bindActionCreators} from 'redux';

const powerRangerSelector = (state) => ({
  powerRanger: state.powerRanger.listItem,
  q: state.router.location.query.q
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, PowerRangerActions, {pushState}), dispatch);

@connect(powerRangerSelector, mapDispatchToProps)
export class Edit extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { findById, params } = this.props;
    findById(params.id);
  }
  onSubmit(powerRanger) {
    const { dispatch, update, pushState} = this.props;
    update(powerRanger)
      .then(() => pushState(null, '/powerRangers'));
  }
  render() {
    let {powerRanger} = this.props;
    return (
      <div>
        <PowerRangerForm initialValues={powerRanger} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}
