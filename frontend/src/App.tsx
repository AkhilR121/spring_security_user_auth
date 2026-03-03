import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState<string>('')

  const callApi = async () => {
    try {
      const res = await fetch('http://localhost:5000/api')
      const data = await res.json()
      setApiMessage(data.message)
    } catch (err) {
      setApiMessage('Error calling API')
    }
  }

  return (
    <div className="App">
      <h1>Vite + React + TS</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={callApi}>Call API</button>
        <p>API Message: {apiMessage}</p>
      </div>
    </div>
  )
}

export default App
