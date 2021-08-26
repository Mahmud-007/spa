import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home';
import Features from './Pages/Features';
import History from './Pages/History';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/features">
            <Features/>
          </Route>
          <Route path="/history">
            <History/>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
