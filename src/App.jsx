import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className='overflow-x-hidden h-screen antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className='container mx-auto px-8'>
          <Navbar></Navbar>
          <Hero></Hero>
          <About></About>
          <Technologies></Technologies>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>

    </>
  )
}

export default App
