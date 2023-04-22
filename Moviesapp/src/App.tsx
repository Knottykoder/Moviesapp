import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MovieList from './components/MoviesListContainer/MovieList'
import useMovieFetch from './Hooks/useMovieFetch'

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const movies = useMovieFetch(searchQuery)
  return (
    <>
   <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
   <MovieList movies={movies}/>
    </>
  )
}

export default App
