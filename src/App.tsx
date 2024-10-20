import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/project" element={<ProjectPage />} /> */}
        {/* <Route path="/tech" element={<TechPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App