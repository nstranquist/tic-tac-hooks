import React, { useState, useEffect } from 'react';
import Tile from './components/Tile'
import './app.css'

// const sampleBoard = [
//   ['X', 'O', null],
//   ['X', 'O', null],
//   ['X', 'O', null],
// ]

const App = () => {
  const [hasWon, setHasWon] = useState(false)
  const [winner, setWinner] = useState(null)  // active state will be string or boolean
  const [board, setBoard] = useState([[],[],[]])  // will want to instantiate and map
  const [p1Turn, setP1Turn] = useState(true)  // check if its' player1's move (true) or player2's (false)

  useEffect(() => {
    resetBoard()
  }, [])

  // TODO: how to minimize renders?

  const resetBoard = () => setBoard([
    [null,null,null],
    [null,null,null],
    [null,null,null],
  ])

  const handleTileClick = (rowIndex, colIndex) => {
    console.log('tile clicked in row:', rowIndex, 'and col:', colIndex)
    let tile = board[rowIndex][colIndex]
    let newBoard = board
    // check if already filled
    if(tile===null) {
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
  
  // fill 3x3 board with tiles, set objects to empty

  return (
    <div className="board-container">
      <h1 style={{fontWeight:400,fontSize:'22px',padding:'10px',margin:0,textDecoration:'underline',textAlign:'center'}}>
        Tic Tac Hooks</h1>
      {hasWon && <p>Winner: {winner}</p> }
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
    </div>
  );
}

export default App;
