import React, { Component } from 'react';
import './DetailHeader.scss';

class DetailHeader extends Component {
  render() {
    return (
      <div className='detail_header_cont'>
        <h1 className='detail_header_title'>Érdekelnek a részletek?</h1>
        <p className='detail_header_desc'>
          Add meg elérhetőségeinket és kollégánk hamarosan felveszi veled a
          kapcsolatot.
        </p>
      </div>
    );
  }
}

export default DetailHeader;
