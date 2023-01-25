// import { Routes, Route, Link } from "react-router-dom";

function TicTacToe() {

  const clickBox = (id) => {
    console.log('id', id);
  }

  return (
    <div className="TicTacToe">
      TicTacToe
      <div className="grid-container">
        <div onClick={() => clickBox(1)} className="grid-item">1<i className="bi bi-x"></i></div>
        <div onClick={() => clickBox(2)} className="grid-item">2</div>
        <div onClick={() => clickBox(3)} className="grid-item">3</div>
        <div onClick={() => clickBox(4)} className="grid-item">4</div>
        <div onClick={() => clickBox(5)} className="grid-item">5</div>
        <div onClick={() => clickBox(6)} className="grid-item">6</div>
        <div onClick={() => clickBox(7)} className="grid-item">7</div>
        <div onClick={() => clickBox(8)} className="grid-item">8</div>
        <div onClick={() => clickBox(9)} className="grid-item">9</div>
      </div>
    </div>
  );
}

export default TicTacToe;
