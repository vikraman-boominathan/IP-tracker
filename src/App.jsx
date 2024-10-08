import { useState } from 'react'
import IpTracker from './comp/IpTracker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <IpTracker />
    </div>
  )
}

export default App
