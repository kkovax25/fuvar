import React, { Component } from 'react';
import Card from '../Card/Card';

class CardContainer extends Component {
  render() {
    return (
      <div className='flex_cont'>
        <Card
          src='/img/middleSvg/cheap.svg'
          title='Kedvező ár'
          description='Az ország határain belül akár 750 Ft-tól.'
        />
        <Card
          src='/img/middleSvg/insurance.svg'
          title='Biztosítás'
          description='A feladott küldemények minden esetben értékbiztosítással rendelkeznek.'
        />
        <Card
          src='/img/middleSvg/cod.svg'
          title='Utánvét kezelése'
          description='Az utánvét begyűjtése után 72 órán belül hozzájutsz a pénzedhez.'
        />
        <Card
          src='/img/middleSvg/integration.svg'
          title='Egyszerű integráció'
          description='A szállítási igényeid átadása bármilyen webshop motorba egyszerűen integrálható. Mindezek megvalósításához technikai segítséget is nyújtunk.'
        />
        <Card
          src='/img/middleSvg/invoice.svg'
          title='Átlátható adminisztrációs felület'
          description='Kövesd naprakészen csomagjaid állapotát. A nyomkövetés természetesen a vásárlóidnak is elérhető.'
        />
        <Card
          src='/img/middleSvg/admin.svg'
          title='Átlátható számlázás'
          description='Kövesd naprakészen csomagjaid állapotát. A nyomkövetés természetesen a vásárlóidnak is elérhető.'
        />
      </div>
    );
  }
}

export default CardContainer;
