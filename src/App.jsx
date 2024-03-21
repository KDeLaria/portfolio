import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutMe, Contact, Portfolio, Resume } from "./pages"
import { Header, Footer} from "./components"
import './App.css'

function App() {

  return (
    <>
      <Header />

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
      <Footer />
    </>
  )
}

export default App;
