import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import DownloadPage from './components/DownloadPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App