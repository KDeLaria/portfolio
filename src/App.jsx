import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {AboutMe, Contact, Portfolio, Resume} from "./pages"
import profileImage from "./assets/images/profile.jpeg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <header>
        {/* <img src={profileImage} alt="Kevin DeLaria" /> */}
        <div id="header-label"><h1>Kevin DeLaria</h1></div>
        <nav>
          <ul>
            <li><a href="/">About Me</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact-me">Contact</a></li>
            <li><a href="resume">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact-me' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>

      </main>
      
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kevindelaria" target="_blank">
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/KDeLaria" target="_blank">
              <i class='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App;
