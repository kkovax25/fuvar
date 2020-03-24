import React, { Component } from 'react';
import './Middle.scss';
import CardContainer from '../CardContainer/CardContainer';
import Companies from '../Companies/Companies';
import Details from '../Details/Details';

class Middle extends Component {
  render() {
    return (
      <div className='middle_cont'>
        <h1 className='middle_title'>Hogy működik a gyakorlatban?</h1>
        <CardContainer />
        <Companies />
        <Details />
      </div>
    );
  }
}

export default Middle;
