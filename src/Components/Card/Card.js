import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() { 
    return ( 
    <div className='card_cont'>
      <div className='img_cont'>
      <img src={this.props.src} alt='icon'/>
      </div>
      <p className='card_title'>{this.props.title}</p>
      <p className='card_desc'>{this.props.description}</p>
    </div> );
  }
}
 
export default Card;