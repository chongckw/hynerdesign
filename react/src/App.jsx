import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Index } from './components/frontend/Index';
import { Backoffice } from './components/backoffice/Backoffice';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route exact path="/admin" element={<Backoffice/>} />
      </Routes>
    </Router>
  )
}

export default App
