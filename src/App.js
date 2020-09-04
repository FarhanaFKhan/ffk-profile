import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Skills from './Skills'
import './App.css';
import Statement from './Statement';

function App() {
  return (
    <div>
    <Header />
    <Banner />
    <Statement />
    <div className = "cards-conatiner">
      <Skills />
    </div>
    
      
    </div>
  );
}

export default App;
