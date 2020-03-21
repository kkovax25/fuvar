import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className='navBar_cont'>
        <div className='fuvar_logo'>
          <img src='img/navbar/logo.svg' alt='fuvar.hu' className='Logo' />
        </div>
        <div className='divider'></div>
        <div className='options'>
          <img src='img/navbar/help.svg' alt='Help' className='Help navicon' />
          <p className='desc'>Így működik</p>
          <img src='img/navbar/add-box.svg' alt='Add-box' className='Add-Box navicon' />
          <p className='desc'>Ajánlatkérés</p>
          <img src='img/navbar/tree.svg' alt='Tree' className='Tree navicon' />
          <p className='desc'>Környezetünkért</p>
        </div>
        <div className='log_part'>
          <p className='login text'>Bejelentkezés</p>
          <p className='reg text'>Regisztráció</p>
          <p className='help text'>Segítség</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
