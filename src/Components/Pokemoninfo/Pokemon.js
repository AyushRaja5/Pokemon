import React from 'react'
import './pokemon.css'

const Pokemon = ({ data }) => {
  console.log(data)
  return (
    <>
      {
        (!data) ? "" : (
          <>
            <div className='contain'>
              <div className='rght'>
                <h1>{data.name}</h1>
                <div className='im'>
                <img id='img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt={data.name} />
                </div>
                <div className='abilities'>
                  {
                    data.abilities.map(poke => {
                      return (
                        <>
                          <div className='group'>
                            <h2 style={{ fontFamily: 'Time new Roman' }}>{poke.ability.name}</h2>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>

              <div className='lft'>
              <div className='base-stat'>
                {
                  data.stats.map((poke) => {
                    return (
                      <>
                        <h3>{poke.stat.name} : {poke.base_stat}</h3>
                      </>
                    )
                  })
                }
              </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Pokemon