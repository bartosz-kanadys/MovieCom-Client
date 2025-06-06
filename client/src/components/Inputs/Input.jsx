function Input({ label, type, id, placeholder, onChange }) {
    return (
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> {label} </label>
            <input onChange={onChange} type={type} name={id} id={id} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
        </div>
    )
}

export default Input