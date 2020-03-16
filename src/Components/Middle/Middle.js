import React, { Component } from 'react';
import './Middle.scss';
import CardContainer from '../CardContainer/CardContainer';
import Companies from '../Companies/Companies';

class Middle extends Component {
  state = {  }
  render() { 
    return ( 
    <div className='middle_cont'>
      <h1 className='middle_title'>Hogy működik a gyakorlatban?</h1>
      <CardContainer/>
      <Companies/>
    </div> );
  }
}
 
export default Middle;