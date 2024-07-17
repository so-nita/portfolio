import logo from './logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VantaBackground from './components/VantaBackground';
import Header from './components/Header';
import Content from './components/Content.js';

function App() {
  return (
    <div className="App">
      <VantaBackground>
        <Header />
        <Content />
      </VantaBackground>
    </div>
  );
}

export default App;
