import './App.css';
import React from 'react';
import {AllCards,Header} from './components';;

function App() {
  return (
    <div className="App">
      {/* <Card name="Harry Potter and the Deathly Hallows (Harry Potter, #7)" rating={4.5} id={1} Author="JK Rowling" /> */}
      {/* <Header /> */}
      <Header/>
      <AllCards />
    </div>
  );
}

export default App;
