import Nav from './components/Nav'
import React from 'react';
import Jumbotron from './components/Jumbotrone';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
    </div>
  );
}

export default App;