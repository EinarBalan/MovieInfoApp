import { MOVIE_KEY } from "./_api-keys"

export const searchDB = async (query, push) => {
    query = processQuery(query)

    try {
        const response =  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)

        var basePosterURL = await fetchBasePosterURL()
        
        let movies = await response.json()   
        movies = await movies.results.map( movie => processMovie(movie, basePosterURL))
        Promise.all(movies).then( (results) => {
            push(results)
        })
    } 
    catch (err) {
        console.error(err)
    }
    
}

const processMovie = async (movie, basePosterURL) => {
    const imdbID = await fetchIMDB(movie.id)
    return {
        Title: movie.title,
        Year: `${movie.release_date.substring(0, movie.release_date.indexOf("-"))}`,
        Poster: `${basePosterURL}${movie.poster_path}`,
        Description: movie.overview,
        imdbID: imdbID,
    }
}

const fetchBasePosterURL = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${MOVIE_KEY}`)

    const URL = await response.json()

    return `${URL.images.secure_base_url}${URL.images.poster_sizes[1]}`
}

const processQuery = query => {
    return query.replaceAll(" ", "%20")
}

const fetchIMDB = async movieID => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${MOVIE_KEY}&language=en-US`)

    response = await response.json()

    return response.imdb_id
}