import Signup from "./components/Signup";
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import { useAuth } from './contexts/AuthContext'

function App() {
  const { currentUser } = useAuth()

  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
    <div className='w-100' style={{ maxWidth: "400px" }}>
      <Routes>
        <Route exact path="/" element={currentUser ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-profile" element={currentUser ? <UpdateProfile /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  </Container>
  )
}

export default App;
