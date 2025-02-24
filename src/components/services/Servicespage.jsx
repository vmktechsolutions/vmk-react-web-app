import { Link } from 'react-router-dom'

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Services from '../Services';


const Servicespage = () => {
    return (
        <div>
            <Navbar />
            <main className="main mt-20 bg-green-500">
                {/* Page Title */}
                <div className="page-title bg-accent py-6">
                    <div className="container mx-auto px-40 flex flex-col lg:flex-row justify-between items-center">
                        <h1 className="mb-2 lg:mb-0 text-2xl text-white font-bold">Services</h1>
                        <nav className="breadcrumbs">
                            <ol className="flex space-x-2 text-white">
                                <li>
                                    <Link to="/" className="hover:text-blue-500 hover:underline">Home</Link>
                                </li>
                                <li className="text-white">/ Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>
            <div className='mt-20 bg-gray-400'>
                <Services />
            </div>
            <section id="features" className="py-12 bg-light">
                <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold">Features</h2>
                    <p className="text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300" data-aos="fade-up" data-aos-delay="100">
                        <i className="bi bi-eye text-yellow-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Lorem Ipsum</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="200">
                        <i className="bi bi-infinity text-blue-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Dolor Sitema</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500  transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-mortarboard text-red-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Sed perspiciatis</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="400">
                        <i className="bi bi-nut text-purple-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Magni Dolores</a></h3>
                    </div>
                </div>
                <div className="container mx-auto px-20 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300" data-aos="fade-up" data-aos-delay="100">
                        <i className="bi bi-eye text-yellow-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Lorem Ipsum</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="200">
                        <i className="bi bi-infinity text-blue-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Dolor Sitema</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500  transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-mortarboard text-red-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Sed perspiciatis</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="400">
                        <i className="bi bi-nut text-purple-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Magni Dolores</a></h3>
                    </div>
                </div>
                <div className="container mx-auto px-20 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300" data-aos="fade-up" data-aos-delay="100">
                        <i className="bi bi-eye text-yellow-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Lorem Ipsum</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="200">
                        <i className="bi bi-infinity text-blue-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Dolor Sitema</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500  transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-mortarboard text-red-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Sed perspiciatis</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="400">
                        <i className="bi bi-nut text-purple-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Magni Dolores</a></h3>
                    </div>
                </div>
                <div className="container mx-auto px-20 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300" data-aos="fade-up" data-aos-delay="100">
                        <i className="bi bi-eye text-yellow-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Lorem Ipsum</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="200">
                        <i className="bi bi-infinity text-blue-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Dolor Sitema</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500  transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-mortarboard text-red-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Sed perspiciatis</a></h3>
                    </div>
                    <div className="features-item flex items-center p-4 border hover:border-green-500 hover:text-green-500 transition duration-300 hover:border-accent" data-aos="fade-up" data-aos-delay="400">
                        <i className="bi bi-nut text-purple-500 text-3xl pr-3"></i>
                        <h3 className="text-lg font-semibold"><a href="#" className="text-heading transition duration-300 hover:text-accent">Magni Dolores</a></h3>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
export default Servicespage