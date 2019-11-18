import React from 'react'

const Tile = ({
  index,
  tile,
  handleTileClick,
}) => {
  return (
    <div className='tile'
      onClick={() => handleTileClick(index)}>
      {tile === null ? '' : tile}
    </div>
  )
}

export default Tile
