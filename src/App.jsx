import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct Router import
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/navbar/Navbar';
import Cources from './components/cources/Cources'; // Import the Cources component correctly
import LearnMore from './components/cources/learnmore/LearnMore';

function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cources" element={<Cources />} />
          <Route path="/course/:id" element={<LearnMore />} />  {/* Dynamic route for LearnMore page */}
        </Routes>
      
    </>
  );
}

export default App;
