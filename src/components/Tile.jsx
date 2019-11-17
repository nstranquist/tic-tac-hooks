import React from 'react'

const Tile = ({
  row,
  col,
  tile,
  handleTileClick,
}) => {
  return (
    <div className='tile'
      onClick={() => handleTileClick(row, col)}>
      {tile === null ? '' : tile}
    </div>
  )
}

export default Tile
