import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import CreateProfile from './pages/CreateProfile'
import Home from './pages/Home'
import SessionDetail from './pages/SessionDetail'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/">Landing</Link> |{" "}
        <Link to="/create-profile">Create Profile</Link> |{" "}
        <Link to="/home">Home</Link> |{" "}
        <Link to="/forum">Forum</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/session" element={<SessionDetail />} />
        <Route path="/forum" element={<h2>General Forum</h2>} />
      </Routes>
    </div>
  )
}

export default App
