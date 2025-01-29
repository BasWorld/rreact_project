
import { Route, Link, Routes } from 'react-router-dom'
import About from './About'
import './App.css'
import Home from './Home'
import Navigation from './Navigation'

function App() {


  return (
    <div>
       <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
       
    </div>
  )
}

export default App
