import React, { useState, useEffect } from 'react';
import Tile from './components/Tile'
import './app.css'

// const sampleBoard = [
//   ['X', 'O', null],
//   ['X', 'O', null],
//   ['X', 'O', null],
// ]

const App = () => {
  const [winner, setWinner] = useState(null)  // active state will be string or boolean
  const [board, setBoard] = useState([[],[],[]])  // will want to instantiate and map
  const [p1Turn, setP1Turn] = useState(true)  // check if its' player1's move (true) or player2's (false)

  useEffect(() => {
    resetBoard()
  }, [])

  useEffect(() => {
    // check for winner when board changes
    console.log("player moved")
    checkWinner()
  }, [p1Turn])

  const checkWinner = () => {
    // check board for 3 in a row
    // 1. if 3 in a row horizontal (3 possibles)
    // 2. if 3 in a row vertical (3 possibles)
    // 3. if 3 in a row diagonal (2 possibles)
    // if a case does exist, check value and match to winner, setWinner({player})
  }

  const resetBoard = () => setBoard([
    [null,null,null],
    [null,null,null],
    [null,null,null],
  ])
  const resetGame = () => {
    resetBoard()
    setP1Turn(true)
    setWinner(false)
  }

  const handleTileClick = (rowIndex, colIndex) => {
    console.log('tile clicked in row:', rowIndex, 'and col:', colIndex)
    let tile = board[rowIndex][colIndex]
    let newBoard = board
    // check if already filled or if game is over
    if(!winner && !tile) {
      // can click tile, then set board to show it's filled (checking p1Turn)
      console.log('setting tile to', p1Turn ? 'p1' : 'p2')
      if(p1Turn)
        tile = 'X'
      else tile='O'
      newBoard[rowIndex][colIndex] = tile
      setBoard(newBoard)
      setP1Turn(!p1Turn)
    }
  }
  
  // TODO: how to minimize renders?
  return (
    <div className="board-container">
      <h1 className="board-title">
        Tic Tac Hooks</h1>
      {winner && <p>Winner: {winner}</p> }
      <div className="board">
        {/* 9 tiles, will want to map */}
        {board.map((row, rowIndex) => {
          console.log('mapped row:', row)
          return (
            <div className='board-row'>
              {row.map((tile, colIndex) => {
                console.log('tile from row:', tile)
                return <Tile key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} tile={tile} handleTileClick={handleTileClick} />
              })}
            </div>
          )
        })}
      </div>
      {winner && <button onClick={resetGame}>Restart</button>}
    </div>
  );
}

export default App;
