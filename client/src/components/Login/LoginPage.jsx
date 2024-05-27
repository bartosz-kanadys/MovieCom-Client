import Input from "../Inputs/Input"
import { useState } from 'react';
import { useAuth } from "../Auth/AuthProvider";

function LoginPage() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const auth = useAuth()

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
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <Input
                                label="Login"
                                type="text"
                                id="login"
                                placeholder="Your Login"
                                onChange={() => setLogin(event.target.value)}
                            />
                            <Input
                                label="Password"
                                type="password"
                                id="password"
                                placeholder="**********"
                                onChange={() => setPassword(event.target.value)}
                            />
                        </form>
                        <button onClick={() => auth.loginAction(login, password)} className="bg-blue-800 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                        <p>
                            {!auth.loginSucces ? <p>Login failed</p> : <></>}
                        </p>

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-4">Sign up</a>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage