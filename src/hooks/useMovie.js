import { useState } from "react"

export function useMovie() {
    const [movies, setMovies] = useState([])
   const [fetchCount, setFetchCount] = useState(0)
  const [loading, setLoading] = useState(false)
    const [selectedGenres, setselectedGenres] = useState('alls')
     const [order, setOrder] = useState('desc')

  const getMovies = async () => {
      setLoading(true)
      setFetchCount(fetchCount + 1)
      try {
        let url = `http://localhost:3001/movies?_page=1&_limit=50&_sort=year&_order=${order}`
        if (selectedGenres !== 'alls') {
          url = `http://localhost:3001/movies?genres_like=${selectedGenres}&_sort=year&_order=${order}`
        }
        const res = await fetch(url)
        const json = await res.json()
        setMovies(json)
        setLoading(false)
      } catch (error) {
        console.log('Run yarn movie-api for fake api')
      }
    }

       const onChangeGenres = evt => {
       setselectedGenres(evt.target.value)
      }

  const orderMovies = () => {
    if (order === 'desc') {
      setOrder('asc')
    } else {
      setOrder('desc')
    }
  }

  return {
getMovies,
loading,
onChangeGenres,
orderMovies,
order,
movies,
selectedGenres,
fetchCount
  }
}
