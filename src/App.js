// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import MyForm from './myForm';
import ReactHookForm from './Reacthookform';


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/myform">Myform</Link>| <Link to="/ReactHookForm">React hook form</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="myform" element={<MyForm />} />
        <Route path="reactHookForm" element={<ReactHookForm />} />
      </Routes>
    </div>
  );
}

export default App;
