import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </Router>
    </>
  )
}

export default App