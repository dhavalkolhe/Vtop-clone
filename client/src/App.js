import React, { useState } from 'react';
import './App.css';
import Header from './components/navigation/Header'
import Sidebar from './components/navigation/Sidebar'
import Spotlight from './components/main/Spotlight'
import DigitalAssignmentUpload from './components/main/AssignmentUpload/DigitalAssignmentUpload'

function App() {

  const [goToDA, setgoToDA] = useState(false);

  const handleClick = (bool) => {
    setgoToDA(bool);
  }

  return (
    <div className="App">
      <Header handleClick = {handleClick}/>
      <Sidebar handleClick = {handleClick}/>
      {goToDA ? <DigitalAssignmentUpload /> : <Spotlight />}
      
    </div>
  );
}

export default App;
