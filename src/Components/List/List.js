import React, { Component } from 'react';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className='list_cont'>
        <h3>{this.props.title}</h3>
        <ul>
          <li>{this.props.item1}</li>
          <li>{this.props.item2}</li>
          <li>{this.props.item3}</li>
          <li>{this.props.item4}</li>
        </ul>
      </div>
    );
  }
}

export default List;
