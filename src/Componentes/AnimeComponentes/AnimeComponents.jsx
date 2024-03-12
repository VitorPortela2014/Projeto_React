import React, { useState } from 'react'

function AnimeComponents() {
    const [animeName, setAnimeName] = useState("one punch")
    const [AnimeDigitando, setAnimeDigitando] = useState("one punch")

    const hadleInputChange = (e) => {
        setAnimeDigitando(e.targe.value);


    }
    function BuscarOAnime() {
        setAnimeDigitando(AnimeDigitando)
    }

    return (
        <div>
            <input type="text" placehoder='Coloque o nome de um anime' value={animeDigitado} onChange={hadleInputChange}></input>
            <button onClick={() => BuscarOAnime()}> Pesquisar </button>

            {Array.isArray(mockAnime) ? (
                <div>
                    {mockAnime.map((a) => (
                        <h1 key={a.id}>{a.title}</h1>
                    ))}
                </div>
            ) : (mockAnime && <div> Sem nenhum anime</div>)}

        </div>

    )
}

export default AnimeComponents;