import { useState } from 'react'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <header>
            {/* <img src="./assets/images/IMG_2265.jpeg" alt="image of KDeLaria" /> */}
            <div id ="header-label"><h1>KDeLaria</h1></div>
      <nav>
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
            </ul>
        </nav>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
