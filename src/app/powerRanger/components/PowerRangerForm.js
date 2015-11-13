import React, { Component } from 'react';
import {reduxForm} from 'redux-form';

@reduxForm({
  form: 'powerRanger',
  fields: ['id', 'name']
})
export class PowerRangerForm extends Component {
  render() {
    const { fields: { id, name }, handleSubmit, initialValues } = this.props;
    return (
      <div>
        <div className='form-group'>
          <label>Name</label>
          <input className='form-control' type='text' {...name}/>
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' onClick={handleSubmit}>Save</button>
        </div>
      </div>
    );
  }
}
