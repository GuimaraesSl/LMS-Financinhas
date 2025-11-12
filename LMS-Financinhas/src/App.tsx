import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomeScreen/HomeScreen'
import LoginScreen from './pages/LoginScreen/LoginScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  )
}

export default App