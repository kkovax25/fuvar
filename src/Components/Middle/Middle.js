import React, { Component } from 'react';
import './Middle.scss';
import CardContainer from '../CardContainer/CardContainer';

class Middle extends Component {
  state = {  }
  render() { 
    return ( 
    <div className='middle_cont'>
      <h1>Hogy működik a gyakorlatban?</h1>
      <CardContainer/>
    </div> );
  }
}
 
export default Middle;