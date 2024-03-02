import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <h1>You're all set!</h1>
    <div className="card">
    {/* <a href="fulfill://PaymentComplete">
        Back to app
      </a> */}

      <p>Close this tab and continue back to the app</p>
      
    </div>
   
  </>
  )
}

export default App
