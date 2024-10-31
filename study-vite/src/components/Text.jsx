import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext"

function Text() {
  const {isDark, setIsDark} = useContext(ThemeContext);
  
  return(
    <>
      <div style={{ backgroundColor: isDark ? 'gray' : 'white' }}>
        <span style={{ color: isDark ? 'white' : 'black' }}>
          HI, MY NAME IS YUNSEOK
        </span>
      </div>
      <button onClick={() => setIsDark(!isDark)}>THEME CHANGE</button>
    </>
  )
}

export default Text