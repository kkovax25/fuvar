import React, { Component } from 'react';
import './Companies.scss';
import { companiesHeader, companiesDesc } from '../../text/text.json';

class Companies extends Component {
  render() {
    return (
      <div className='companies_cont'>
        <h1 className='companies_title'>{companiesHeader}</h1>
        <p className='companies_desc'>{companiesDesc}</p>
        <div className='companies_pic_cont'>
          <img
            src='/img/companies/tnt.png'
            alt='tnt'
            srcSet='/img/companies/tnt@2x.png 2x,
             /img/companies/tnt@3x.png 3x'
            className='tnt'
          />
          <img
            src='/img/companies/mpl.png'
            alt='mpl'
            srcSet='/img/companies/mpl@2x.png 2x,
             /img/companies/mpl@3x.png 3x'
            className='mpl'
          />
          <img
            src='/img/companies/gls.png'
            alt='gls'
            srcSet='/img/companies/gls@2x.png 2x,
     /img/companies/gls@3x.png 3x'
            className='gls'
          ></img>
        </div>
      </div>
    );
  }
}

export default Companies;
