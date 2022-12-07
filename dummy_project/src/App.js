import React, { useState } from 'react';
import DemoOutput from './components/Demo/DemoOutput';
import Button from "./components/UI/Button/Button";
import './App.css';

function App() {

  function toggleParagraphHandler(){
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }

  const [showParagraph, setShowParagraph] = useState(false);
  console.log('APP RUNNING');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Show paragraph!</Button>
    </div>
  );
}

export default App;
