import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  state = {};
  render() {
    return (
      <button className={this.props.className} onClick={this.props.handleClick}>
        {this.props.innerText}
      </button>
    );
  }
}

export default Button;
