// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import MyForm from './myForm';


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/myform">Myform</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="myform" element={<MyForm />} />
      </Routes>
    </div>
  );
}

export default App;
