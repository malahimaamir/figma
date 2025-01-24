
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import NewPage from './NewPage';
import DashboardPage from './DashboardPage'; // Import the existing DashboardPage component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;