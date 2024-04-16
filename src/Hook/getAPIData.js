import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function useApiAnimeData(anime) {
    const [animeData, setAnimeData] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fecthData() {
            try {
                setloading(true);
                const searchInput = anime.toLowerCase();
                const formattedSearch = searchInput.replace(/\s+/g, "-"); //  espaços em branco foram substituídos por hífens
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${formattedSearch}`);
                if (response.status === 200) {
                    setAnimeData(response.data.data);
                } else {
                    setError("Erro ao encontrar anime");
                }
            } catch (err) {
                setError(err.message);
                setloading(false);
            } finally {
                setloading(false);
            }
        }
        fecthData();
    }, [anime]);

    return { animeData, loading, error };

}
export default useApiAnimeData;


