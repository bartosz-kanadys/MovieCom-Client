import Header from '../Header/Header'
import { useParams } from 'react-router-dom';
import '../MovieCard/movieCard.css'
import MoviePanel from './MoviePanel';
import CommentsPanel from './CommentsPanel';
import AddComment from './AddComment'

function MoviePage() {

    let { id } = useParams();

    return (
        <>
            <Header isSearch={false}></Header>
            <MoviePanel id={id}></MoviePanel>
            <CommentsPanel id={id}></CommentsPanel>
            <AddComment></AddComment>
        </>
    )
}

export default MoviePage