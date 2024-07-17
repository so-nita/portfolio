import logo from './logo.svg';
import './App.css';
import VantaBackground from './components/VantaBackground';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <VantaBackground>
        <Header />
      </VantaBackground>
    </div>
  );
}

export default App;
