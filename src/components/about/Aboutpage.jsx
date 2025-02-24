import { useState, useEffect } from 'react'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import About from '../About'
import { Link } from 'react-router'
import Clients from '../Clients'
import carousal from '../../assets/carousal.jpg'

const Aboutpage = () => {

    const [progress, setProgress] = useState({
        HTML: 0,
        CSS: 0,
        JavaScript: 0,
        PHP: 0,
        WordPress: 0,
        Photoshop: 0,
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress({
                HTML: 100,
                CSS: 90,
                JavaScript: 75,
                PHP: 80,
                WordPress: 90,
                Photoshop: 55,
            });
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <Navbar />
            <main className="main mt-20 bg-green-500">
                {/* Page Title */}
                <div className="page-title bg-accent py-6">
                    <div className="container mx-auto px-40 flex flex-col lg:flex-row justify-between items-center">
                        <h1 className="mb-2 lg:mb-0 text-2xl text-white font-bold">About</h1>
                        <nav className="breadcrumbs">
                            <ol className="flex space-x-2 text-white">
                                <li>
                                    <Link to="/" className="hover:text-blue-500 hover:underline">Home</Link>
                                </li>
                                <li className="text-white">/ About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>

            <About />
            <main className="main">
                <section id="team" className="py-12 bg-light">
                    <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl font-bold">Our Team</h2>
                        <p className="text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src={carousal} alt="Walter White" className="w-full h-60 object-cover" />
                                <div className="absolute inset-0 flex justify-center items-center space-x-3 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <Link to={"/"}><a className="text-white hover:text-green-500 text-lg"><i className="bi bi-twitter-x"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-blue-500  text-lg"><i className="bi bi-facebook"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-red-500 text-lg"><i className="bi bi-instagram"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-cyan-500 text-lg"><i className="bi bi-linkedin"></i></a></Link>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold text-gray-800">Walter White</h4>
                                <span className="text-gray-500">Chief Executive Officer</span>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src={carousal} alt="Sarah Jhonson" className="w-full h-60 object-cover" />
                                <div className="absolute inset-0 flex justify-center items-center space-x-3 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <Link to={"/"}><a className="text-white hover:text-green-500 text-lg"><i className="bi bi-twitter-x"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-blue-500  text-lg"><i className="bi bi-facebook"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-red-500 text-lg"><i className="bi bi-instagram"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-cyan-500 text-lg"><i className="bi bi-linkedin"></i></a></Link>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold text-gray-800">Sarah Jhonson</h4>
                                <span className="text-gray-500">Product Manager</span>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src={carousal} alt="William Anderson" className="w-full h-60 object-cover" />
                                <div className="absolute inset-0 flex justify-center items-center space-x-3 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <Link to={"/"}><a className="text-white hover:text-green-500 text-lg"><i className="bi bi-twitter-x"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-blue-500  text-lg"><i className="bi bi-facebook"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-red-500 text-lg"><i className="bi bi-instagram"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-cyan-500 text-lg"><i className="bi bi-linkedin"></i></a></Link>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold text-gray-800">William Anderson</h4>
                                <span className="text-gray-500">CTO</span>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="400">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src={carousal} alt="Amanda Jepson" className="w-full h-60 object-cover" />
                                <div className="absolute inset-0 flex justify-center items-center space-x-3 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <Link to={"/"}><a className="text-white hover:text-green-500 text-lg"><i className="bi bi-twitter-x"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-blue-500  text-lg"><i className="bi bi-facebook"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-red-500 text-lg"><i className="bi bi-instagram"></i></a></Link>
                                    <Link to={"/"}><a className="text-white hover:text-cyan-500 text-lg"><i className="bi bi-linkedin"></i></a></Link>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold text-gray-800">Amanda Jepson</h4>
                                <span className="text-gray-500">Accountant</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skills" className="py-12 bg-light">
                    <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl font-bold">Our Skills</h2>
                        <p className="text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="mb-4">
                            <span className="block text-heading-color font-semibold text-lg uppercase">HTML <span className="float-right font-normal">{progress.HTML}%</span></span>
                            <div className="w-full bg-gray-200 h-2 overflow-hidden rounded">
                                <div className="bg-red-500 h-2 transition-all duration-1000 ease-in-out" style={{ width: `${progress.HTML}%` }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="block text-heading-color font-semibold text-lg uppercase">CSS <span className="float-right font-normal">{progress.CSS}%</span></span>
                            <div className="w-full bg-gray-200 h-2 overflow-hidden rounded">
                                <div className="bg-blue-500 h-2 transition-all duration-1000 ease-in-out" style={{ width: `${progress.CSS}%` }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="block text-heading-color font-semibold text-lg uppercase">JavaScript <span className="float-right font-normal">{progress.JavaScript}%</span></span>
                            <div className="w-full bg-gray-200 h-2 overflow-hidden rounded">
                                <div className="bg-yellow-500 h-2 transition-all duration-1000 ease-in-out" style={{ width: `${progress.JavaScript}%` }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="block text-heading-color font-semibold text-lg uppercase">PHP <span className="float-right font-normal">{progress.PHP}%</span></span>
                            <div className="w-full bg-gray-200 h-2 overflow-hidden rounded">
                                <div className="bg-purple-500 h-2 transition-all duration-1000 ease-in-out" style={{ width: `${progress.PHP}%` }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="block text-heading-color font-semibold text-lg uppercase">WordPress <span className="float-right font-normal">{progress.WordPress}%</span></span>
                            <div className="w-full bg-gray-200 h-2 overflow-hidden rounded">
                                <div className="bg-green-500 h-2 transition-all duration-1000 ease-in-out" style={{ width: `${progress.WordPress}%` }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="block text-heading-color font-semibold text-lg uppercase">Photoshop <span className="float-right font-normal">{progress.Photoshop}%</span></span>
                            <div className="w-full bg-gray-200 h-2 overflow-hidden rounded">
                                <div className="bg-pink-500 h-2 transition-all duration-1000 ease-in-out" style={{ width: `${progress.Photoshop}%` }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Clients />



            <Footer />

        </div>
    )
}

export default Aboutpage
