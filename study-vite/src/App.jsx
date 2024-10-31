import { useState, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Text from './components/Text';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [data, setData] = useState();
  const [result, setResult] = useState();

  async function fetchData() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      setData(await response.json());
    } catch(error) {
      console.error('Fetch Error: ', error);
    }
  }

  async function createData() {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'John',
          job: 'Developer'
        })
      })
      setResult(await response.json());
    } catch(error) {
      console.log('FETCH ERROR: ', error);
    }
  }

  useEffect(() => {
    fetchData();
    createData();
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])

  useEffect(() => {
    console.log(result);
  }, [result])

  return (
    <>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Text />
      </ThemeContext.Provider>
    </>
  )
}

export default App
