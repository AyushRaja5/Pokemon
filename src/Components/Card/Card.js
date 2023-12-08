import React from 'react'
import './card.css'
const img1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
const Card = ({ pokemon, loading, infopokemon }) => {
  console.log(pokemon[0])
  return (
    <>
      {
        loading ? <h2>Loading....</h2> :
          pokemon.map((item) => {
            return (
              <>
                <div className='card' key={item.id} onClick={()=>{infopokemon(item)}}>
                  <h2>{item.id}.</h2>
                  <img src={item.sprites.front_default} alt={`${item.name} pic`} style={{ height: '100px', width: '100px' }} />
                  <h2>{item.name}</h2>
                </div>
              </>
            )
          })
      }
    </>
  )
}

export default Card