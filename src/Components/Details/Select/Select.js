import React, { Component } from 'react';
import '../Form/Form.scss';
import './Select.scss';

class Selector extends Component {
  render() {
    return (
      <div className='select_cont'>
        <div className='label_cont'>
          <label>{this.props.title}</label>
        </div>
        <div className='select_cont'>
          <select
            value={this.props.value}
            onChange={this.props.onChange}
            name={this.props.name}
            required
          >
            <option>
              Kérlek válassz...
            </option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Selector;
