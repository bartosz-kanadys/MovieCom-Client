import '../MovieCard/movieCard.css'

function Comment(props) {
    return (
        <div className=' flex'>
            <div className='float-left'>
                <img src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                    className='max-w-20 rounded-lg border-2 border-app mx-6 mt-6'>
                </img>
                <p className='mt-1'>
                    {props.user}
                </p>
            </div>
            <div className='text-left w-full float-left p-3 mt-6 border-2 border-app rounded-lg'>
                <p>{props.content}</p>
            </div>
            <div className='bg-app flex items-center justify-center  rounded-lg mt-6 mr-6 ml-4 w-2/12 text-white font-bold text-3xl'>
                {props.rating}/10
            </div>
        </div>
    )
}

export default Comment