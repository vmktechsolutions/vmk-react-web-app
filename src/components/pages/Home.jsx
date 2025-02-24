import Navbar from '../navbar/Navbar.jsx'
import Footer from '../footer/Footer.jsx'
import Crousal from '../Crousal.jsx'
import About from '../About.jsx'
import Services from '../Services.jsx'
import Portfolio from '../Portfolio.jsx'
import Clients from '../Clients.jsx'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Crousal />
            <About />
            <Services />
            <Portfolio />
            <Clients />
            <Footer />
        </div>
    )
}

export default Home
