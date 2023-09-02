import Navbar from './component/Navbar/navbar'
import Intro from './component/Navbar/Intro/intro'
import Skills from './component/skills/skills'
import Works from './component/works/works'
import Contact from './component/Contact/contact'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}

export default App
