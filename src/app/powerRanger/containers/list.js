import React, { Component } from 'react';
import * as PowerRangerActions from 'powerRanger/actions';
import { connect } from 'react-redux';
import { PowerRangerList } from 'PowerRangerList';
import { PowerRangerForm } from 'PowerRangerForm';
import { reset as resetForm } from 'redux-form';
import { bindActionCreators } from 'redux';

const powerRangerSelector = (state) => {
  return {
    powerRangers: state.powerRanger.list
  };
};
const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, PowerRangerActions, {resetForm}), dispatch);

@connect(powerRangerSelector, mapDispatchToProps)
export class List extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { find } = this.props;
    find();
  }
  onDelete(id) {
    const { destroy, find } = this.props;
    destroy(id)
      .then(find());
  }
  onSubmit(ranger) {
    const { create, find, resetForm } = this.props;
    create(ranger)
      .then(resetForm('powerRanger'))
      .then(find());
  }
  render() {
    let { powerRangers} = this.props;
    return (
      <div>
        <PowerRangerForm onSubmit={::this.onSubmit}/>
        <PowerRangerList powerRangers={powerRangers} onDelete={::this.onDelete}/>
      </div>
    );
  }
}
