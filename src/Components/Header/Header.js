import React, { Component } from 'react';
import './Header.scss';
// import Button from '../Button/Button';

class Header extends Component {
  state = {  }
  render() { 
    return (
     <div className='header_cont'>
       <div className='header_textPart'>
        <h1 className='header_title'>Fókuszálj az igazán fontos dolgokra, a szállítást bízd ránk!</h1>
        <p className='text1'>Képzeld csak el, mennyit spórolnál, ha webáruházad szállítási feladatait más intézné, ráadásul sokkal olcsóbb szállítási díjakon! A fuvar.hu küldetése az adott feladathoz tartozó legokosabb szállítási megoldás megtalálása, az üres rakterek versenyeztetésével.</p>
        <p className='text2'>Mi ehhez értünk a legjobban. Segíthetünk benne?</p>
        <div className='header_button'><p>Vedd fel velünk a kapcsoaltot</p></div>
       </div>
       <div className='header_deliver'>
         <img src='img/illustration.png'
     srcset='img/illustration@2x.png 2x,
             img/illustration@3x.png 3x' alt='delivery'/>
       </div>
    </div> );
  }
}
 
export default Header;
