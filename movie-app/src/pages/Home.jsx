import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "./../css/Home.css"

export default function Home(){

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "Leo", release_date: "2024", url: ""},
        {id: 2, title: "Thunderbolts*", release_date: "2025", url:""},
        {id: 3, title: "Logout", release_date: "2025", url:""},
    ]

    function handleSearch(e){
        e.preventDefault()

        setSearchQuery("")
    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                name="search"
                id="search"
                placeholder="search movies"
                className="search-inputer" 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button" >search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=>(
                movie.title.toLocaleLowerCase().startsWith(searchQuery) &&
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}