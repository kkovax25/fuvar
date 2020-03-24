import React, { Component } from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import './Details.scss';
import Form from './Form/Form';
import Selector from './Select/Select';

const initialState = {
  name: '',
  phone: '',
  email: '',
  weblink: '',
  packSize: '',
  frequency: '',
  formError: '',
  emailError: ''
};
class Details extends Component {
  state = initialState;

  showState = e => {
    let url = 'the_link_for_post';
    e.preventDefault();
    let details = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      weblink: this.state.weblink,
      packSize: this.state.packSize,
      frequency: this.state.frequency
    };

    const isValid = this.validate();
    if (isValid) {
      fetch(url, {
        method: 'POST',
        body: details
      });
      console.log(details);
      alert('Köszönjük munkatársaink hamarosan felveszik önnel a kapcsolatot');
      this.setState(initialState);
    }
  };

  validate = () => {
    let emailError = '';
    let formError ='';
    if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
      emailError = 'Kérjük adjon meg egy helyes email címet!';
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    if(!this.state.frequency || !this.state.packSize === 'Kérlek válassz...' || undefined){
      formError='Kérem válaszzon az opciók közül';
    }
    if(formError){
      this.setState({formError})
      return false
    }
    return true;
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className='details_cont'>
        <DetailHeader />
        <form onSubmit={this.showState}>
          <div className='field_cont'>
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
                mask='+99/99/9999999'
              />
              <Selector
                title='Átlagos csomagméret:'
                name='packSize'
                value={this.state.packSize}
                onChange={this.onChange}
                errorMsg={this.state.formError}
              />
              <Form
                title='Email cím:'
                name='email'
                value={this.state.email}
                onChange={this.onChange}
                errorMsg={this.state.emailError}
              />
              <Selector
                title='Havi szállítások száma:'
                name='frequency'
                value={this.state.frequency}
                onChange={this.onChange}
                errorMsg={this.state.formError}
              />
            </div>
            <div className='button_wrapper'>
              <div className='submit' type='submit' onSubmit={this.showState}>
                <button className='submit_button' type='submit'>
                  Kapcsolat felvétele
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Details;
