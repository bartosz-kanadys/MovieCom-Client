import axios from 'axios';
import { useEffect, useState } from 'react';
import Input from '../Inputs/Input';

function RegisterPage() {
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [serverData, setServerData] = useState(null)
    const [errors, setErrors] = useState({
        login: "Login must have min 6 characters",
        email: "Email is incorrect",
        password: "Password must have min 8 characters"
    })

    useEffect(() => {
        if (password.length < 8 || password.length == 0) {
            setErrors({
                ...errors,
                password: "Password must have min 8 characters"
            })
        }
        else {
            setErrors({
                ...errors,
                password: null
            })
        }
    }, [password])

    useEffect(() => {
        if (!isEmailValid(email)) {
            setErrors({
                ...errors,
                email: "Email is incorrect"
            })
        } else {
            setErrors({
                ...errors,
                email: null
            })
        }
    }, [email]),

        useEffect(() => {
            if (login.length < 6 || login.length == 0) {
                setErrors({
                    ...errors,
                    login: "Login must have min 6 characters"
                })
            }
            else {
                setErrors({
                    ...errors,
                    login: null
                })
            }
        }, [login])

    const register = () => {
        if (
            errors.email == null &&
            errors.login == null &&
            errors.password == null
        ) {
            axios.post('http://localhost:9000/register', {
                login,
                email,
                password
            })
                .then((response) => {
                    setServerData(response)
                    //console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const onLoginChange = (event) => {
        setLogin(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const isEmailValid = (email) => {
        return String(email).match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"></img>
                    MovieCom
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-400">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register account
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <Input
                                label="Login"
                                type="text"
                                id="login"
                                placeholder="Your Login"
                                onChange={onLoginChange}
                            />
                            <Input
                                label="E-mail"
                                type="email"
                                id="email"
                                placeholder="mail@example.com"
                                onChange={onEmailChange}
                            />

                            <Input
                                label="Password"
                                type="password"
                                id="password"
                                placeholder="**********"
                                onChange={onPasswordChange}
                            />
                            <p className='text-white'>
                                {errors.login == null ? <></> : <span>{errors.login}<br></br></span>}
                                {errors.email == null ? <></> : <span>{errors.email}<br></br></span>}
                                {errors.password == null ? <></> : <span>{errors.password}<br></br></span>}
                            </p>
                            <p>
                                {serverData ? <p className='text-white font-bold text-lg'>{serverData.data.message}</p> : <></>}
                            </p>

                        </form>
                        <button onClick={register} className="bg-blue-800 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            You have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-4">Login</a>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage