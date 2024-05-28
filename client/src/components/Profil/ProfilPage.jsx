import Header from "../Header/Header"
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'


function ProfilPage() {
    const [tokenData, setTokenData] = useState({ login: "" })

    useEffect(() => {
        const token = Cookies.get('JWT')
        if (token) {
            const decodedToken = jwtDecode(token)
            console.log(decodedToken)
            setTokenData(decodedToken)
        } else {
            setTokenData(null)
        }
    }, [])

    return (
        <>
            <Header isSearch={false}></Header>
            <div className="m-auto bg-white w-8/12 min-h-96 rounded-lg my-5">
                <div className="md:float-left md:w-fill p-5 ">
                    <img src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                        className=" m-auto w-64 h-64 rounded-lg">

                    </img>
                </div>

                <div className=" text-3xl font-bold pt-5">
                    <p>{tokenData.login}</p>
                    <p className="text-lg font-normal mt-3">{tokenData.email}</p>
                    <p className="text-lg font-normal mt-3">Role: {tokenData.role.join(", ")}</p>
                </div>

            </div>
        </>

    )
}

export default ProfilPage