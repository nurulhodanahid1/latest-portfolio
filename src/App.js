import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Home />
      <Footer />
      <Contact />
      <Footer />
    </Router>

  );
}

export default App;
