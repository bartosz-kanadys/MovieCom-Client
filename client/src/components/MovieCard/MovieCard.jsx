import './movieCard.css'

function Movie(props) {
    return (
        <div className="p-10 grid place-items-center font-mono ">

            <div className="xs:min-w-96 bg-white rounded-md bg-gray-800 shadow-lg max-w-2xl min-h-96">
                <div className="lg:flex px-4 leading-none " >
                    <div className="flex-none  ">
                        <img
                            src={props.poster}
                            alt="pic"
                            className="xs:m-auto h-70 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                        />
                    </div>

                    <div className="flex-col text-gray-800 ">

                        <p className="pt-4 text-2xl font-bold">{props.title} ({props.year})</p>
                        <hr className="hr-text" data-content=""></hr>
                        <div className="text-md flex justify-between px-4 my-2">
                            <span className="font-bold"> {props.runtime} min | {props.genres}</span>
                            <span className="font-bold"></span>
                        </div>
                        <p className="hidden md:block px-4 my-4 text-sm text-left"> {props.plot} </p>

                        <p className=" flex text-md px-4 my-2">
                            Rating: {props.rating}
                            <span className="font-bold px-2">|</span>
                            Votes: {props.votes}
                        </p>
                        <p className='w-full'>
            
                            <a href="#" className="items-center justify-center flex mb-4 mt-7 m-auto w-3/5 text-white bg-blue-700    font-bold rounded-lg text-lg p-3  dark:hover:bg-blue-900 ">Comments</a>

                        </p>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default Movie