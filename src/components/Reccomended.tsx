'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Reccomended() {
    const [reccomendedMovies,setReccomendedMovies] = useState<{movieName: string, movieImg: string, rating: number}[]>([])
    useEffect(() => {
        axios.get('http://localhost:3000/movieReccomendations')
        .then(res => { const reccomdedMovies = res.data.map((movie: any) => ({
            movieName: movie.title,
            movieImg: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            rating: movie.vote_average
        }  
    ))
    setReccomendedMovies(reccomdedMovies);         
        })
    },[])
    return (

      <div className="p-6 bg-gray-900 text-white text-center">
      <div className="flex pl-6 pr-6 justify-between items-center mb-2">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
         Best Rated Movies
        </h1>
    
        <button className="text-yellow-400 text-lg font-semibold hover:text-yellow-300 transition duration-300">
          See More →
        </button>
      </div>
    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-900 text-white">
        {reccomendedMovies.map((movie: any, index) => (
          index <= 7 && (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-amber-400 hover:border border-amber-400"
            >
              <img
                src={movie.movieImg}
                alt={movie.movieName}
                className="w-full h-auto object-fit transition-transform duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 hover:opacity-100 bg-black/40">
                <h2 className="text-lg font-bold truncate">{movie.movieName}</h2>
                <p className="text-yellow-400 font-semibold">⭐ {movie.rating.toFixed(1)}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
    
    )
}