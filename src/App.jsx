import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutMe, Contact, Portfolio, Resume } from "./pages"
import './App.css'

function App() {

const [hilighted, setHighlighted] = useState();





  return (
    <>
      <header className="flex-md-row d-md-flex align-items-md-end bg-secondary rounded">
        <h1 className="col-md-6 d-md-flex align-self-md-start">Kevin DeLaria</h1>
        <nav className="col-md-6">
          <ul className="d-md-flex justify-content-md-around">
            <li className="d-md-inline-flex">
              <a href="/">About Me</a>
            </li>
            <li className="d-md-inline-flex">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="d-md-inline-flex">
              <a href="/contact-me">Contact</a>
            </li>
            <li className="d-md-inline-flex">
              <a href="resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container-fluid pt-3 pb-3 main text-start">
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
        <ul className="d-md-flex justify-content-md-around">
          <li className="d-md-inline-flex">
            <a href="https://www.linkedin.com/in/kevindelaria" target="_blank">
              <i className='fab fa-linkedin'></i> LinkedIn
              {/* <i class='fab fa-linkedin' style='font-size:36px'></i> */}
            </a>
          </li>
          <li className="d-md-inline-flex">
            <a href="https://github.com/KDeLaria" target="_blank">
              <i className='fab fa-github'></i> GitHub
              {/* <i class='fab fa-github' style='font-size:36px'></i> */}
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App;
