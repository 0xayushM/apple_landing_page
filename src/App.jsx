import Nav from './components/Nav'
import React from 'react';
import Jumbotron from './components/Jumbotrone';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
      <WebgiViewer/>
    </div>
  ); 
}

export default App;
