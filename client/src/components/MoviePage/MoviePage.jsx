import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom';
import '../MovieCard/movieCard.css'
import MoviePanel from './MoviePanel';
import Comment from './Comment';
import CommentsPanel from './CommentsPanel';



function MoviePage() {

    let { id } = useParams();

    return (
        <>
            <Header isSearch={false}></Header>

            <MoviePanel id={id}></MoviePanel>
            <CommentsPanel id={id}></CommentsPanel>
        </>
    )
}

export default MoviePage