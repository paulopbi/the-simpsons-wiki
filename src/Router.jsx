import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Character from './pages/Character'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
