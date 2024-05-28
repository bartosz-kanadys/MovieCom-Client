import { useEffect, useState } from 'react'
import '../MovieCard/movieCard.css'
import Comment from './Comment';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function CommentsPanel(props) {

    return (
        <div className='px-5 mb-10'>
            <div className='bg-white max-w-5xl m-auto rounded-md p-5  '>
                {
                    Cookies.get('JWT') ?
                        <p>Zaraz dodamy komentarz</p>
                        :
                        <p className='font-bold text-lg'>To add comment you must
                            <a href="/login" className='bg-app text-white p-2 rounded-lg ml-3'>LOGIN</a>
                        </p>
                }

            </div>
        </div>
    )
}

export default CommentsPanel