import { useState } from "react"

export function useGenres() {

    const [genres, setGenres] = useState([])


 async function getGenres() {
      try {
        const res = await fetch('http://localhost:3001/genres')
        const json = await res.json()
        setGenres(json.sort())
      } catch (error) {
        console.log('Run yarn movie-api for fake api')
      }
    }

  return {
    genres,
    getGenres
  }
}
