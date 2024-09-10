import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import TechPage from './pages/TechPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/tech" element={<TechPage />} />
      </Routes>
      <Toaster
        position="bottom-right" />
    </Router>
  )
}

export default App