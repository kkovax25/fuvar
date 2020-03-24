import React, { Component } from 'react';
import Card from '../Card/Card';
import { middleCards } from '../../text/text.json';

class CardContainer extends Component {
  render() {
    return (
      <div className='flex_cont'>
        {middleCards.map(details => (
          <Card
          key={details.title}
            src={details.img}
            title={details.title}
            description={details.desc}
          />
        ))}
      </div>
    );
  }
}

export default CardContainer;
