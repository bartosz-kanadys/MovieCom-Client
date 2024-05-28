import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../MovieCard/movieCard.css'
import Comment from './Comment';
import axios from 'axios';

function CommentsPanel(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchData()
        console.log(comments)
    }, [])

    const fetchData = async () => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:9000/comments/movieID/${props.id}`)
            setComments(response.data)
            console.log(response)
        }

        fetchData()
    }


    return (
        <div className='p-5'>
            <div className='bg-white max-w-5xl m-auto rounded-md pb-6 '>
                {comments.length ?
                    comments.map(comment => {
                        return (
                            <Comment
                                user={comment.user}
                                content={comment.content}
                                rating={comment.rating}
                            />
                        )
                    })
                    :
                    <p className='font-bold text-xl pt-5'>No comments </p>
                }

            </div>
        </div>
    )
}

export default CommentsPanel