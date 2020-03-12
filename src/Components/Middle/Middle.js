import React, { Component } from 'react';
import Companies from '../Companies/Companies';
import './Middle.scss';

class Middle extends Component {
  state = {  }
  render() { 
    return ( <div className='middle_cont'>
      <Companies/>
    </div> );
  }
}
 
export default Middle;