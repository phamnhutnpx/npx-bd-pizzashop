import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/index';
import { GlobalStyle } from './GlobalStyle';
import Hero from './Components/Hero/index';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
