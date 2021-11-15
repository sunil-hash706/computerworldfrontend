import './App.css';
import Home from './componants/Home';
import About from './componants/About';
import Login from './componants/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TechNews from './componants/TechNews';
import Signup from './componants/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
        <Route path="/technews" element={<TechNews/>} />
      </Routes>
      <Routes>
        <Route path="/signIn" element={<Login/>} />
      </Routes>
      <Routes>
        <Route path="/signUp" element={<Signup/>} />
      </Routes>
     
    </Router>
  );
}

export default App;
