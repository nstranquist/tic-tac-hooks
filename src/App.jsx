import React, { useState, useEffect } from 'react';
import Tile from './components/Tile'
import './app.css'

const sampleBoard = [
  ['X', 'O', null],
  ['X', 'O', null],
  ['X', 'O', null],
]

const App = () => {
  const [hasWon, setHasWon] = useState(false)
  const [winner, setWinner] = useState(null)  // active state will be string or boolean
  const [board, setBoard] = useState(sampleBoard)  // will want to instantiate and map

  // useEffect(() => {
  //   resetBoard()
  // }, [])

  //const resetBoard = () => setBoard([[],[],[]])
  
  // fill 3x3 board with tiles, set objects to empty

  return (
    <div className="board-container">
      <h1 style={{fontWeight:400,fontSize:'22px',padding:'10px',margin:0,textDecoration:'underline',textAlign:'center'}}>
        Tic Tac Hooks</h1>
      {hasWon && <p>Winner: {winner}</p> }
      <div className="board">
        {/* 9 tiles, will want to map */}
        {board.map(row => {
          console.log('mapped row:', row)
          return (
            <div className='board-row'>
              {row.map(tile => {
                console.log('tile from row:', tile)
                return <Tile tile={tile} />
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
