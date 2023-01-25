// import { Routes, Route, Link } from "react-router-dom";
// 
function GameIcon(props: { icon: 'x' | 'o' }) {

  
  return (
    <div className="GameIcon">
      {props.icon === 'x' && <i className="bi bi-x"></i>}
      {props.icon === 'o' && <i className="bi bi-circle"></i>}
    </div>

  );
}

export default GameIcon;