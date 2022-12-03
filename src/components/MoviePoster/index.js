import './styles.css';

export default function MoviePoster({movies = [] }) {
  return (
    <div className="movie-library__list">
    {movies && movies.map((movie, index)=> (
      <li key={index} className="movie-library__card" >
              { 
                movie.posterUrl && <img src={movie.posterUrl} 
                 onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src='https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg';
                }}
                 alt={movie.title} /> 
              }
            <ul>
            <li className="movie-library__card-title">{movie.title}</li>
              <li className="movie-library__card-genres">{movie.genres.join(', ')}</li>
              <li className="movie-library__card-year">{movie.year}</li>
            </ul>
            </li>
        ))}
    </div>
  )
}
