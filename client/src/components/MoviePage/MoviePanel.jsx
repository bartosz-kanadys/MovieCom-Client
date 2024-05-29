import { useEffect, useState } from 'react'
import '../MovieCard/movieCard.css'
import axios from 'axios';
import checkToken from '../Auth/checkToken';

function MoviePanel({id}) {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetchData()
        checkToken
    }, [])

    const fetchData = async () => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:9000/movies/id/${id}`)
            setMovie(response.data)
        }

        fetchData()
    }

    return (
        <>
            {movie ?
                <div className="px-5 pt-5 grid place-items-center font-mono ">
                    <div className="xs:min-w-96 bg-white rounded-md shadow-lg max-w-5xl min-h-460">
                        <div className="lg:flex px-4 leading-none " >
                            <div className="flex-none mt-5 ">
                                <img
                                    src={movie.poster}
                                    alt="pic"
                                    className="xs:m-auto h-70 w-56 rounded-md   shadow-lg "
                                />
                            </div>
                            <div className="flex-col px-4 pb-9 text-gray-800 ">
                                <p className="pt-4 text-2xl font-bold">{movie.title} ({movie.year})</p>
                                <hr className="w-11/12 h-2px mx-auto  border-0 rounded md:my-5 dark:bg-gray-700" data-content=""></hr>
                                <div className="text-md flex justify-between  my-2">
                                    <span className="font-bold"> {movie.runtime} min | {movie.genres.join(", ")}</span>
                                    <span className="font-bold"></span>
                                </div>
                                <p className="  my-4 text-justify text-sm "> {movie.fullplot ? movie.fullplot : movie.plot} </p>

                                <div className="text-left  text-md  my-8">
                                    <span className='block '>Released: {movie.released.substring(0, 10)}</span>
                                    <span className='block'>Languages: {movie.languages.join(", ")}</span>
                                    <span className='block'>Countries: {movie.countries.join(", ")}</span>
                                </div>

                                <p className=" flex text-md  my-8">
                                    Rating: {JSON.stringify(movie.imdb.rating)}
                                    <span className="font-bold px-2">|</span>
                                    Votes: {JSON.stringify(movie.imdb.votes)}
                                </p>

                                <div className='text-left'>
                                    <h3 className='font-bold text-lg'>Directors</h3>
                                    {movie.directors.length ? movie.directors.join(", ") : <p>no data</p>}
                                </div>

                                <div className='text-left mt-5'>
                                    <h3 className='font-bold text-lg'>Cast</h3>
                                    {movie.cast.length ? movie.cast.join(", ") : <p>no data</p>}
                                </div>

                                <div className='text-left mt-5'>
                                    <h3 className='font-bold text-lg'>Writers</h3>
                                    {movie.writers.length ? movie.writers.join(", ") : <p>no data</p>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                :
                <p>Błąd</p>
            }
        </>
    )
}

export default MoviePanel