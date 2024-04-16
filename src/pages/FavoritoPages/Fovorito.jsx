import React from 'react'
import "./Favorito.css"
import { useLoaderData } from 'react-router-dom'
import AnimeCard from '../../Componentes/animeCards/AnimeCards';
function FavoritoPage(){
    const { data } = useLoaderData();
  return (
    <div>
        <div className='anime-cards'>
            {data.map((animes) => (<AnimeCard key={animes.mal_id} {...animes}/>))}

        </div>
    </div>
  )
}

export default FavoritoPage;    