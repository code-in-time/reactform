import GameIcon from './gameIcon'
// import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const convertPlayerToText = (playerTurn) => playerTurn === 0 ? 'human': 'computer';

function TicTacToe() {
  const [playerTurn, setPlayerTurn] = useState(0);
  const [clickedBlocksHuman, setClickedBlocksHuman] = useState([]);
  const [clickedBlocksComputer, setClickedBlocksComputer] = useState([]);

  useEffect(() => {
    console.log(convertPlayerToText(0), clickedBlocksHuman);
    console.log(convertPlayerToText(1), clickedBlocksComputer);
  }, [playerTurn, clickedBlocksHuman, clickedBlocksComputer]);


  const clickBox = (id) => {

    if (playerTurn === 0) {
      setClickedBlocksHuman([...clickedBlocksHuman, id])
    } else if(playerTurn === 1) {
      setClickedBlocksComputer([...clickedBlocksComputer, id])
    }
    
    setPlayerTurn(playerTurn === 0 ? 1 : 0);
    console.log(id);
  }

  return (
    <div className="TicTacToe">
      {clickedBlocksComputer}
      turn: {convertPlayerToText(playerTurn)}
      <br />
      TicTacToe  <GameIcon icon='x'/> <GameIcon icon='o'/>
      <div className="grid-container">
        <button onClick={() => clickBox(1)} disabled={clickedBlocksHuman.includes(1) || clickedBlocksComputer.includes(1)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(2)} disabled={clickedBlocksHuman.includes(2) || clickedBlocksComputer.includes(2)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(3)} disabled={clickedBlocksHuman.includes(3) || clickedBlocksComputer.includes(3)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(4)} disabled={clickedBlocksHuman.includes(4) || clickedBlocksComputer.includes(4)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(5)} disabled={clickedBlocksHuman.includes(5) || clickedBlocksComputer.includes(5)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(6)} disabled={clickedBlocksHuman.includes(6) || clickedBlocksComputer.includes(6)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(7)} disabled={clickedBlocksHuman.includes(7) || clickedBlocksComputer.includes(7)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(8)} disabled={clickedBlocksHuman.includes(8) || clickedBlocksComputer.includes(8)} className="grid-item"><GameIcon icon='x'/></button>
        <button onClick={() => clickBox(9)} disabled={clickedBlocksHuman.includes(9) || clickedBlocksComputer.includes(9)} className="grid-item"><GameIcon icon='x'/></button>
      </div>
    </div>
  );
}

export default TicTacToe;
