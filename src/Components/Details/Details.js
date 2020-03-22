import React, { Component } from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import './Details.scss';
import Form from './Form/Form';
import Selector from './Select/Select';

// const test = {
//   nameError: '',
//   emailError: ''
// };

class Details extends Component {
  state = {
    details: {
      name: '',
      phone: '',
      email: '',
      weblink: '',
      packSize: '',
      frequency: '',
    }
  }
  showState = e => {
    // let url = 'the_link_for_post';
    e.preventDefault();
    console.log(this.state);

    // fetch(url, {
    //   method: 'POST',
    //   body: this.state
    // });
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className='details_cont'>
        <DetailHeader />
        <form onSubmit={this.showState}>
          <div className='form_flex_cont'>
            <Form
              name='name'
              title='Teljes név:'
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form
              title='Webáruház linkje:'
              name='weblink'
              value={this.state.weblink}
              onChange={this.onChange}
            />
            <Form
              title='Telefonszám:'
              name='phone'
              value={this.state.phone}
              onChange={this.onChange}
            />
            <Selector
              title='Átlagos csomagméret:'
              name='packSize'
              value={this.state.packSize}
              onChange={this.onChange}
            />
            <Form
              title='Email cím:'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
            />
            <Selector
              title='Havi szállítások száma:'
              name='frequency'
              value={this.state.frequency}
              onChange={this.onChange}
            />
          </div>
          <button className='submit_button' type='submit'>
            <div className='submit' type='submit' onSubmit={this.showState}>
              <p className='inner_text'>Kapcsolat felvétele</p>
            </div>
          </button>
        </form>
      </div>
    );
  }
}

export default Details;
