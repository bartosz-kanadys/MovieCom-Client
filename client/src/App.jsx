import React, {useEffect, useState} from 'react'
import axios from 'axios';


function App() {
  
  const [backendData, setBackendData] = useState(";)")

  // TESTING API
  const apiCall = () => {
    axios.get('http://localhost:9000/testAPI/test').then((data) => {
      setBackendData(data.data)
    })
  }

  return (
    <>
    <button onClick={apiCall}>Make API Call</button>
      <div>
      
      <p>{backendData}</p>
      </div>
    </>
  )
}

export default App
