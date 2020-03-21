import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  render() {
    return (
      <div className='form_cont'>
        <div className='label_cont'>
          <label>{this.props.title}</label>
        </div>
        <div className='input_cont'>
          <input
            type='text'
            name={this.props.name}
            placeholder={this.props.title}
            value={this.props.value}
            onChange={this.props.onChange}
            required
          />
        </div>
      </div>
    );
  }
}

export default Form;
