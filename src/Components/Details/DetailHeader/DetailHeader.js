import React, { Component } from 'react';
import { formHeader, formDesc } from '../../../text/text.json';
import './DetailHeader.scss';

class DetailHeader extends Component {
  render() {
    return (
      <div className='detail_header_cont'>
        <h1 className='detail_header_title'>{formHeader}</h1>
        <p className='detail_header_desc'>{formDesc}</p>
      </div>
    );
  }
}

export default DetailHeader;
