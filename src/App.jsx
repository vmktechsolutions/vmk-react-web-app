
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Aboutpage from './components/about/Aboutpage.jsx'
import Servicespage from './components/services/Servicespage.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Pricing from './components/pricing/Pricing.jsx'
import Blog from './components/blog/Blog.jsx'
import Contactus from './components/contact/Contactus.jsx'

const App = () => {
  return (
    <div>
      <HashRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/services' element={<Servicespage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contactus />} />
        </Routes>

      </HashRouter>




    </div>
  )
}

export default App