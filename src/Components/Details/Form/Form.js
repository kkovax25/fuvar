import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import './Form.scss';

class Form extends Component {
  render() {
    return (
      <div className='form_cont'>
        <div className='label_cont'>
          <label>{this.props.title}</label>
        </div>
        <div className='input_cont'>
          <InputMask
            mask={this.props.mask}
            name={this.props.name}
            onChange={this.props.onChange}
            value={this.props.value}
            placeholder={this.props.title}
          />
          <span className='error_msg'>{this.props.errorMsg}</span>
        </div>
      </div>
    );
  }
}

export default Form;
