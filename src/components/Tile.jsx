import React from 'react'

const Tile = ({
  tile
}) => {
  return (
    <div className='tile'>
      {tile === null ? '' : tile}
    </div>
  )
}

export default Tile
