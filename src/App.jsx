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
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    resetBoard()
  }, [])

  useEffect(() => {
    // check for winner when board changes
    console.log("player moved")
    checkWinner()
    if(moves < 9) setMoves(moves+1)
    else setWinner('draw')
  }, [p1Turn])

  const checkWinner = () => {
    // check board for 3 in a row
    // 1. if 3 in a row horizontal (3 possibles)
    // 2. if 3 in a row vertical (3 possibles)
    // 3. if 3 in a row diagonal (2 possibles)
    // let horizontal = [ // can do (row + col) to find real value. will assume values from 0,1,2 = (0 - 4)
    //   [0,1,2],
    //   [1,2,3],
    //   [2,3,4],
    // ]
    // let vertical = [
    //   [0,1,2],
    //   [1,2,3],
    //   [2,3,4],
    // ]
    // let diagonal = [
    //   [0,2,4],
    //   [0,2,4],
    // ]
    // EDIT: will now be 0-8 to check for wins
    const winPatterns = [ // combine patterns from above
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    // loop through board
    winPatterns.map((row, rowIndex) => {
      //let savedRow = []
      //let win = row
      //const [ one, two, three ] = row
      if(board[row[0]] && board[row[1]] && board[row[2]]) { // check if all tiles in pattern have been played
        if(board[row[0]] === board[row[1]] && board[row[1]] === board[row[2]]) {
          console.log('we have a winner:', board[row[0]])
          if(board[row[0]] === 'X')
            setWinner('X')
          if(board[row[0]] === 'O')
            setWinner('O')
        }
      }
      //savedRow.push(col)
      // check row for wins
    })
    // if a case does exist, check value and match to winner, setWinner({player})
  }

  const resetBoard = () => setBoard([null,null,null,null,null,null,null,null,null]) // set board to 9 null values in only 1 row
  const resetGame = () => {
    resetBoard()
    setP1Turn(true)
    setMoves(0)
    setWinner(false)
  }

  const handleTileClick = (index) => {
    console.log('tile clicked at index:', index)
    let tile = board[index]
    let newBoard = board
    // check if already filled or if game is over
    if(!winner && !tile) {
      // can click tile, then set board to show it's filled (checking p1Turn)
      console.log('setting tile to', p1Turn ? 'p1' : 'p2')
      if(p1Turn)
        tile = 'X'
      else tile='O'
      newBoard[index] = tile
      setBoard(newBoard)
      setP1Turn(!p1Turn)
    }
  }
  
  // TODO: how to minimize renders?
  return (
    <div className="board-container">
      <h1 className="board-title">
        Tic Tac Hooks</h1>
      {winner && <p className='winner-text'>Winner: {winner}</p> }
      <div className="board">
        {/* 9 tiles, will want to map */}
        {board.map((tile, tileIndex) => {
          console.log('mapped tile:', tile)
          return <Tile key={tileIndex} index={tileIndex} tile={tile} handleTileClick={handleTileClick} />
        })}
      </div>
      {winner && <button className='restart-btn' onClick={resetGame}>Restart</button>}
    </div>
  );
}

export default App;
