import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from '../MovieCard/MovieCard';
import '../../App.css'
import Header from '../Header/Header';
import InfiniteScroll from "react-infinite-scroll-component";

function HomePage() {
    const [allMovies, setAllMovies] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(6);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()
    }, [search])

    const fetchData = () => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:9000/movies/limit/?limit=6&skip=0&title=${search}`)
            setAllMovies(response.data)
        }

        fetchData()
    }

    const fetchMoreData = () => {
        axios
            .get(`http://localhost:9000/movies/limit/?limit=6&skip=${index}&title=${search}`)
            .then((res) => {
                setAllMovies((prevItems) => [...prevItems, ...res.data]);

                res.data.length > 0 ? setHasMore(true) : setHasMore(false);
            })
            .catch((err) => console.log(err));

        setIndex((prevIndex) => prevIndex + 6);
    };

    return (
        <>
            <Header search={search} setSearch={setSearch}></Header>
            <div >
                <InfiniteScroll
                    dataLength={allMovies.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                >
                    
                        {allMovies.length > 0 ?
                            <>
                            <div id='main' className="grid  md:grid-cols-2 gap-1 p-1 max-w-7xl  ">
                                {allMovies.map((movie) => {
                                    return (
                                        <Movie
                                            title={movie.title}
                                            poster={movie.poster}
                                            genres={movie.genres.join(", ")}
                                            plot={movie.plot}
                                            rating={movie.imdb?.rating}
                                            votes={movie.imdb?.votes}
                                            year={movie.year}
                                            runtime={movie.runtime}
                                        ></Movie>
                                    )
                                })}
                                </div>
                            </>
                            :
                            <p className='w-full text-center text-lg text-white font-bold'>Brak filmow w bazie</p>
                        }
                    
                </InfiniteScroll>
            </div>
        </>
    )
}

export default HomePage