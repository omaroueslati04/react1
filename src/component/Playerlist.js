import React from 'react'
import Cards from './Player'
import players from '../data'

const Playerlist = () => {
  return (
    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between', marginTop:'40px'}}>
      {players.map(player=> <Cards player={player} key={player.id} />)}
    </div>
  )
}

export default Playerlist
