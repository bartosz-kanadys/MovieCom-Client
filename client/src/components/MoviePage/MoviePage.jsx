import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom';
import '../MovieCard/movieCard.css'
import MoviePanel from './MoviePanel';



function MoviePage() {
    // const [movie, setMovie] = useState({})

     let { id } = useParams();

    // useEffect(()=>{
    //     fetchData()
    // },[])

    // const fetchData = () => {
    //     const fetchData = async () => {
    //         const response = await axios.get(`http://localhost:9000/movies/id/${id}`)
    //         setMovie(response.data)
    //     }

    //     fetchData()
    // }
    return (
        <>
        <Header isSearch={false}></Header>
        
        <MoviePanel id={id}></MoviePanel>
        
        </>
    )
}

export default MoviePage