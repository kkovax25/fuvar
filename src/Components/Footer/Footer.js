import React, { Component } from 'react';
import './Footer.scss';
import List from '../List/List';

class Footer extends Component {
  state = {
    value: ''
  };
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className='footer_cont'>
        <div className='list'>
          <List
            title='Tudj meg többet'
            item1='Megbízóknak'
            item2='Fuvarozóknak'
            item3='Webáruházaknak'
            item4='Környezetünkért'
          />
          <List
            title='Információk'
            item1='Segítség központ'
            item2='Fuvarozó partnereink'
            item3='Felhasználási feltételek'
            item4='Adatvédelmi szabályzat'
          />
          <List
            title='A cégről'
            item1='Rólunk'
            item2='Impresszum'
            item3='Blog'
            item4='Karrier'
          />
          <div className='form_cont'>
            <div className='label_cont'>
              <label>Iratkozz fel a hírlevelünkre!</label>
            </div>
            <div className='input_cont'>
              <input
                type='text'
                name='email'
                placeholder='Email címed'
                value={this.state.value}
                onChange={this.onChange}
              />
              <div className='subscribe'>
              <p className='subs_text'>Feliratkozás</p>
            </div>

            </div>
          </div>
        </div>
        <div className='languages'>
          <img
            src='img/footer/hungary.png'
            srcset='img/footer/hungary@2x.png 2x,
             img/footer/hungary@3x.png 3x'
            class='hungary icon'
            alt='hungary'
          />
          <p className='hun desc'>Magyar</p>
          <img
            src='img/footer/united-kingdom.png'
            srcset='img/footer/united-kingdom@2x.png 2x,
             img/footer/united-kingdom@3x.png 3x'
            class='united-kingdom icon'
            alt='england'
          />
          <p className='eng desc'>English</p>
          <img
            src='img/footer/croatia.png'
            srcset='img/footer/croatia@2x.png 2x,
             img/footer/croatia@3x.png 3x'
            class='croatia icon'
            alt='croatia'
          />
          <p className='cro desc'>Hrvatski</p>
          <p className='company'>© 2019 Fuvar.hu - Minden jog fenntartva</p>
        </div>
        <div className='divider'></div>
        <div className='bottom'>
          <img
            src='img/footer/barion.png'
            srcset='img/footer/barion@2x.png 2x,
             img/footer/barion@3x.png 3x'
            class='barion'
            alt='payments'
          />
          <img
            src='img/footer/hiventures.png'
            srcset='img/footer/hiventures@2x.png 2x,
             img/footer/hiventures@3x.png 3x'
            class='hiventures'
            alt='hiventures'
          />
          <img
            src='img/footer/new-szechenyi-logo.png'
            srcset='img/footer/new-szechenyi-logo@2x.png 2x,
             img/footer/new-szechenyi-logo@3x.png 3x'
            class='new_szechenyi_logo'
            alt='szecheny_logo'
          />
        </div>
      </div>
    );
  }
}

export default Footer;
