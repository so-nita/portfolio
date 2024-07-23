// import logo from './logo.svg';
import React /*, { useState, useEffect } */ from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VantaBackground from './components/VantaBackground';
import Header from './components/Header';
import Content from './components/Content.js';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => {
  //     clearTimeout();
  //   };
  // }, []);

  return (
    // <main>
    //   <Header />
    //   <Content />
    // </main>
    
    <VantaBackground>
      <Header />
      <Content />
    </VantaBackground>
  );
}

export default App;
