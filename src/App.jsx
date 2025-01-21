import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct Router import
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/navbar/Navbar';
import Cources from './components/cources/Cources'; 
import LearnMore from './components/cources/learnmore/LearnMore';
// import BlogLearnMore from './components/blog/bloglearnmore/BlogLearnMore';
import Blog from './components/blog/Blog';
import ContactPage from './pages/ContactPage';
import CourcesPage from './pages/CourcesPage';
import LoginPage from './pages/LoginPage';
import StartExam from './components/cources/exam/startexam/StartExam';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GuestExamPage from './pages/GuestExamPage';
import GuestExam from './components/guestexam/GuestExam';
import GallaryPage from './pages/GallaryPage';
import ImageDetail from './components/gallary/imagedetail/ImageDetail';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/cources" element={<Cources />} /> */}
        <Route path="/cources" element={<CourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/course/:id" element={<LearnMore />} />  {/* Dynamic route for LearnMore page */}
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog/:id" element={<BlogLearnMore />} />  Dynamic route for BlogLearnMore page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/startexam/:id" element={
          <PrivateRoute>
            <StartExam />
          </PrivateRoute>
        } />
        <Route path="/guestexam" element={<GuestExamPage />} />
        <Route path="/gallary" element={<GallaryPage />} />
        <Route path="/image/:id" element={<ImageDetail />} /> {/* Fixed issue */}
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
