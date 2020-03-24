import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Middle from './Components/Middle/Middle';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='main_cont'>
      <NavBar />
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
