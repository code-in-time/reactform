// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import MyForm from './myForm';
import ReactHookForm from './Reacthookform';
import DragDrop from './dragDrop';


function App() {
  return (
    <div className="App container-fluid">
      <ul className="nav nav-pills">
        {/* <li className="nav-item">
          <NavLink className="nav-Link" to="/">Home</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/myform">Myform</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ReactHookForm">ReactHookForm</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/DragDrop">DragDrop</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="myform" element={<MyForm />} />
        <Route path="reactHookForm" element={<ReactHookForm />} />
        <Route path="dragDrop" element={<DragDrop />} />
      </Routes>
    </div>
  );
}

export default App;
