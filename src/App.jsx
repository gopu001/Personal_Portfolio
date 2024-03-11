import './App.scss'
import Navbar1 from './Navbar1/Navbar1'
import Hero from './components/Hero/Hero'
// import About from './components/About/About'
import About1 from './components/About1/About1'
import Project from './components/Projects/Project'
import TechStacks from './components/TechStacks/TechStacks'
import Contact from './components/Contact/Contact'
import Timeline from './components/Timeline/Timeline'

function App() {


  return (
    <>
      <section>
        <Navbar1/>
        <Hero/>
      </section>
      <section><About1/></section>
      <section><Timeline/></section>
      <section><Project/></section>
      <section><TechStacks/></section>
      <section><Contact/></section>
  
  
    </>
  )
}

export default App
