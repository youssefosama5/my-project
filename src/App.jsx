import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Why from './Components/Why'
import Footer from './Components/Footer'
import MoviesList from './Components/MoviesList'
import MovieDetails from './Components/MovieDetails'
import BookingPage from './Components/BookingPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MoviesList />
              <Why />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  )
}

export default App
