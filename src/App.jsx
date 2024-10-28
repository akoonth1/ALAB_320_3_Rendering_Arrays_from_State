import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LearnerCard from './components/LearnerCard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <LearnerCard />
      </div>
    </>
  )
}

export default App
