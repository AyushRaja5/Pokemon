import React, { useEffect, useState } from 'react'
import './main.css'
import Card from '../Card/Card'
import Pokemon from '../Pokemoninfo/Pokemon'

import axios from 'axios'

const Main = () => {
  const [pokdata, setpokdata] = useState([])
  const [loading, setloading] = useState(true)
  const [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nexturl, setnexturl] = useState();
  const [prevurl, setprevurl] = useState();
  const [pokdex,setpokdex] = useState();

  const pokFun = async () => {
    setloading(true);
    const res = await axios.get(url);
    setnexturl(res.data.next)
    setprevurl(res.data.previous)
    getpokdata(res.data.results)
    setloading(false)
    // console.log(res)
    // console.log(res.data.results);
    // console.log(pokdata)
  }
  const getpokdata = async (res) => {
    const updatedPokdata = [];
    for (const item of res) {
      const result = await axios.get(item.url);
      updatedPokdata.push(result.data);
    }
    updatedPokdata.sort((a, b) => a.id - b.id);
    setpokdata(updatedPokdata);
  }

  useEffect(() => {
    pokFun();
  }, [url])

  return (
    <>
      <div className='container'>
        <div className='left-content'>
          <Card pokemon={pokdata} loading={loading}  infopokemon={poke=>setpokdex(poke)}/>
        </div>
        <div className='right-content'>
          <Pokemon data={pokdex}/>
        </div>
      </div>
      <div className='btn-group'>
            < button onClick={()=>{
              seturl(prevurl)
              setpokdata([])
            }}>Previous</button>

            <button onClick={()=>{
              seturl(nexturl)
              setpokdata([])
            }}>Next</button>
          </div>
    </>
  )
}

export default Main