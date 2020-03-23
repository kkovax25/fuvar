import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  state = {  }
  render() { 
    return (
     <div className='header_cont'>
       <div className='header_textPart'>
        <h1 className='header_title'>Fókuszálj az igazán fontos dolgokra, a szállítást bízd ránk!</h1>
        <p className='text1'>Képzeld csak el, mennyit spórolnál, ha webáruházad szállítási feladatait más intézné, ráadásul sokkal olcsóbb szállítási díjakon! A fuvar.hu küldetése az adott feladathoz tartozó legokosabb szállítási megoldás megtalálása, az üres rakterek versenyeztetésével.</p>
        <p className='text2'>Mi ehhez értünk a legjobban. Segíthetünk benne?</p>
        <div className='header_button'><p className='header_button_desc'>Vedd fel velünk a kapcsoaltot</p></div>
       </div>
       <div className='header_deliver'>
         <img src='img/header/illustration.png'
     srcset='img/header/illustration@2x.png 2x,
             img/header/illustration@3x.png 3x' alt='delivery' className='header_pic'/>
       </div>
    </div> );
  }
}
 
export default Header;
