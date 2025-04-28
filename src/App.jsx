import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "../data.json"
import AnimeData from './components/AnimeData'
function App() {
  const [characters, setCharacters] = useState(data)

  return (
    <>
     {
      characters.map((character)=>(
       <AnimeData data={character}/>
      ))
     }
    </>
  )
}

export default App
