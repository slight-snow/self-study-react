import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api-nodejs-todolist.herokuapp.com/user/register');
        console.log(response.json);
      } catch {

      }
    }
  }, [])

  return (
    <>
    </>
  )
}

export default App
