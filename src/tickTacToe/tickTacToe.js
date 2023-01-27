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
  [3, 5, 7]
];

const blocksBase = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
}

function TicTacToe() {
  const [playerTurn, setPlayerTurn] = useState(null);
  const [winner, setWinner] = useState(null);
  const [blocks, setBlocks] = useState(blocksBase);

  const checkForWinner = () => {
    const arrComp = []
    const arrHum = []

    for (const property in blocks) {
      if (blocks[property] === 1) {
        arrComp.push(parseInt(property));
      } else if (blocks[property] === 0) {
        arrHum.push(parseInt(property));
      }
    }

    for (let i = 0; i < winning.length; i++) {
      const currItem = winning[i];
      console.log(currItem);
      // check human
      if (currItem.every(r => arrHum.includes(r))) {
        console.log('Found all of', currItem, 'in', arrHum);
        setWinner(0);
        break;
      }

      // check computer
      if (currItem.every(r => arrComp.includes(r))) {
        console.log('Found all of', currItem, 'in', arrComp);
        setWinner(1);
        break;
      }

    }
  }

  const computerTurn = () => {
    const result = [];
    for (const property in blocks) {
      if (blocks[property] === null) {
        result.push(parseInt(property));
      }
    }


    // debugger;
    const compChoice = result[Math.floor(Math.random() * result.length)];
    // debugger
    console.log('computerTurn', compChoice);

    clickBox(compChoice);
  }



  useEffect(() => {
    checkForWinner();
    setPlayerTurn(playerTurn === 1 ? 0 : 1);
    console.log('blocks', blocks);
  }, [blocks]);

  useEffect(() => {

    if (playerTurn === 1 && winner === null) {
      console.log('playerTurn', playerTurn, ' computer');
      setTimeout(() => {
        computerTurn();
      }, 3000)
    }
  }, [playerTurn]);

  const resetGame = () => {
    setBlocks(blocksBase);
    setWinner(null);
  }

  const renderBlocks = (obj) => {
    const btnArr = [];
    for (const property in obj) {
      const btn = <button
        key={property}
        onClick={() => playerTurn === 0 && clickBox(property)}
        className="grid-item"
        disabled={obj[property] === null && winner === null ? null : true}
      >{showIcon(obj[property])}

      </button>

      btnArr.push(btn);
    }

    return btnArr;
  }


  const convertPlayerToText = (playerTurn) => playerTurn === 0 ? 'human' : 'computer';

  const showIcon = (id) => {
    if (id === 0) {
      return <GameIcon icon='o' />
    } else if (id === 1) {
      return <GameIcon icon='x' />
    }

    return null;

  };

  const clickBox = (id) => {

    const updatedArr = { ...blocks };
    updatedArr[id] = playerTurn;

    setBlocks(updatedArr)
  }

  return (
    <div className="TicTacToe">
      {winner !== null && `THE WINNER IS: ${convertPlayerToText(winner)}`}
      {winner !== null && <button onClick={() => resetGame()}>reset</button>}
      <hr />
      {winner === null && `whos turn: ${convertPlayerToText(playerTurn)}`}
      {playerTurn === 1 && winner === null &&
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      }


      <div className="grid-container">
        {renderBlocks(blocks)}
      </div>
    </div>
  );
}

export default TicTacToe;
