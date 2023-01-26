import GameIcon from './gameIcon'
// import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const winning = [
  [1, 2, 3],
  [4, 5.6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]];

function TicTacToe() {
  const [playerTurn, setPlayerTurn] = useState(0);
  const [clickedBlocksHuman, setClickedBlocksHuman] = useState([]);
  const [clickedBlocksComputer, setClickedBlocksComputer] = useState([]);
  const [winner, setWinner] = useState(null);

  const checkForWinner = () => {
    for (let i = 0; i < winning.length; i++) {
      const currItem = winning[i];
      console.log(currItem);
      // check human
      if (currItem.every(r => clickedBlocksHuman.includes(r))) {
        console.log('Found all of', currItem, 'in', clickedBlocksHuman);
        setWinner(0);
        break;
      }

      // check computer
      if (currItem.every(r => clickedBlocksComputer.includes(r))) {
        console.log('Found all of', currItem, 'in', clickedBlocksComputer);
        setWinner(1);
        break;
      }

    }

  }

  

  useEffect(() => {
    checkForWinner();
  }, [clickedBlocksHuman, clickedBlocksComputer]);


  const convertPlayerToText = (playerTurn) => playerTurn === 0 ? 'human' : 'computer';


  const disableButton = (id) => clickedBlocksHuman.includes(id) || clickedBlocksComputer.includes(id) || winner!==null;

  const showIcon = (id) => {
    if (clickedBlocksHuman.includes(id)) {
      return <GameIcon icon='o' />
    } else if (clickedBlocksComputer.includes(id)) {
      return <GameIcon icon='x' />
    }

    return null;

  };

  const clickBox = (id) => {

    if (playerTurn === 0) {
      setClickedBlocksHuman([...clickedBlocksHuman, id])

    } else if (playerTurn === 1) {
      setClickedBlocksComputer([...clickedBlocksComputer, id])
    }

    setPlayerTurn(playerTurn === 0 ? 1 : 0);
    console.log(id);
  }

  return (
    <div className="TicTacToe">
      {winner !== null && `THE WINNER IS: ${convertPlayerToText(winner)}`}
       <hr />
      {winner === null && `whos turn: ${convertPlayerToText(playerTurn)}`}
      <div className="grid-container">
        <button onClick={() => clickBox(1)} disabled={disableButton(1)} className="grid-item">{showIcon(1)}</button>
        <button onClick={() => clickBox(2)} disabled={disableButton(2)} className="grid-item">{showIcon(2)}</button>
        <button onClick={() => clickBox(3)} disabled={disableButton(3)} className="grid-item">{showIcon(3)}</button>
        <button onClick={() => clickBox(4)} disabled={disableButton(4)} className="grid-item">{showIcon(4)}</button>
        <button onClick={() => clickBox(5)} disabled={disableButton(5)} className="grid-item">{showIcon(5)}</button>
        <button onClick={() => clickBox(6)} disabled={disableButton(6)} className="grid-item">{showIcon(6)}</button>
        <button onClick={() => clickBox(7)} disabled={disableButton(7)} className="grid-item">{showIcon(7)}</button>
        <button onClick={() => clickBox(8)} disabled={disableButton(8)} className="grid-item">{showIcon(8)}</button>
        <button onClick={() => clickBox(9)} disabled={disableButton(9)} className="grid-item">{showIcon(9)}</button>
      </div>
    </div>
  );
}

export default TicTacToe;
