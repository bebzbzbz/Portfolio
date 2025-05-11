import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Skillset from './components/Skillset/Skillset'
import Projects from './components/Projects/Projects'
import { useState } from 'react'

function App() {
  const [german, setGerman] = useState<boolean>(false)

  return (
    <>
      <Nav german={german} setGerman={setGerman}/>
      <main>
        <Hero german={german}/>
        <Projects german={german}/>
        <Skillset german={german}/>
        <AboutMe german={german}/>
        <Contact german={german}/>
      </main>
    </>
  )
}

export default App
