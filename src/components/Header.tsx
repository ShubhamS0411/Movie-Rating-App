'use client'
import { useState } from "react"
import axios from "axios";

export default function Header() {
 
  const [movies, setMovies] = useState<string>('');
  const [storeMovieList, setStoreMovieList] = useState<{movieName: string, movieImg: string, rating: number}[]>([]);

  const searchMovie = () => {
  
    axios.post('http://localhost:3000/movieSearch', { movieName: movies })
    .then(res => {
      const Image_Base_URL = 'https://image.tmdb.org/t/p/w500';
  
      const filteredMovies = res.data.results
        .filter((movie: any) => movie.poster_path && movie.vote_average>0) 
        .map((movie: any) => ({
          movieName: movie.title,
          movieImg: Image_Base_URL + movie.poster_path,
          rating: movie.vote_average
        }));
  
      setStoreMovieList(filteredMovies); 
    })
    .catch(err => console.error("Error fetching movies:", err));
  
     
  }
  console.log(movies)

    return (
      <div className="flex flex-col items-center bg-gray-900  p-8 pb-0 text-white">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-400">🎬 Movie Finder</h1>
    
        <div className="flex items-center w-full max-w-md bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-md">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="flex-grow bg-transparent text-white px-4 py-2 outline-none placeholder-gray-400"
            value={movies}
            onChange={(e) => setMovies(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all"
            onClick={searchMovie}
          >
            🔎
          </button>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
          {storeMovieList.map((movie, index) => (
            <div
            key={index}
            className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={movie.movieImg}
              alt={movie.movieName}
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
            />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300 flex-col p-4">
             <h2 className="text-lg font-bold text-white">{movie.movieName}</h2>
              <p className="text-yellow-400 font-semibold">⭐ {movie.rating.toFixed(1)}</p>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    );

}


// Fetch Movies And Display According To Trending and Top Rated
// Add Filters
// Add Favourites
// Add Reccomendations
// Add Pagination
// Add Login And Sign Up


