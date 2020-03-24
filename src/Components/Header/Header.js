import React, { Component } from 'react';
import { welcomeText, headerDesc, headerP } from '../../text/text.json';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header_cont'>
        <div className='header_textPart'>
          <h1 className='header_title'>{welcomeText}</h1>
          <p className='text1'>{headerDesc}</p>
          <p className='text2'>{headerP} </p>
          <div className='header_button'>
            <p className='header_button_desc'>Vedd fel velünk a kapcsoaltot</p>
          </div>
        </div>
        <div className='header_deliver'>
          <img
            src='img/header/illustration.png'
            srcSet='img/header/illustration@2x.png 2x,
             img/header/illustration@3x.png 3x'
            alt='delivery'
            className='header_pic'
          />
        </div>
      </div>
    );
  }
}

export default Header;
