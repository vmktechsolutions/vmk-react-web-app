import Navbar from '../navbar/Navbar.jsx'
import Footer from '../footer/Footer.jsx'
import { Link } from 'react-router'
import carousal from '../../assets/carousal.jpg'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <main className="main mt-20 bg-green-500">
                {/* Page Title */}
                <div className="page-title bg-accent py-6">
                    <div className="container mx-auto px-40 flex flex-col lg:flex-row justify-between items-center">
                        <h1 className="mb-2 lg:mb-0 text-2xl text-white font-bold">Blog</h1>
                        <nav className="breadcrumbs">
                            <ol className="flex space-x-2 text-white">
                                <li>
                                    <Link to="/" className="hover:text- hover:underline">Home</Link>
                                </li>
                                <li className="text-white">/ Blog</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>
            <main className='main mb-4'>
                <section id="blog-posts" className="py-12">
                    <div className="container mx-auto px-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <article className="relative bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:shadow-xl">
                                <div className="relative group">
                                    <img
                                        src={carousal}
                                        alt=""
                                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 ">
                                        December 12
                                    </span>
                                </div>
                                <div className="p-5 flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-500">
                                        Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <div className="flex items-center mr-4">
                                            <i className="bi bi-person-fill text-gray-500"></i>
                                            <span className="ml-2">John Doe</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="bi bi-folder-fill text-gray-500"></i>
                                            <span className="ml-2">Politics</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.
                                        Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                    </p>
                                    <hr className="mb-4 border-gray-300" />
                                    <a href="blog-details.html" className="flex items-center text-green-500 hover:underline">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </article>
                            <article className="relative bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:shadow-xl">
                                <div className="relative group">
                                    <img
                                        src={carousal}
                                        alt=""
                                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 ">
                                        March 19
                                    </span>
                                </div>
                                <div className="p-5 flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-500">
                                        Nisi magni odit consequatur autem nulla dolorem
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <div className="flex items-center mr-4">
                                            <i className="bi bi-person-fill text-gray-500"></i>
                                            <span className="ml-2">Julia Parker</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="bi bi-folder-fill text-gray-500"></i>
                                            <span className="ml-2">Economics</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et.
                                        Quo libero rerum voluptatem pariatur nam.
                                    </p>
                                    <hr className="mb-4 border-gray-300" />
                                    <a href="blog-details.html" className="flex items-center text-green-500 hover:underline">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </article>
                            <article className="relative bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:shadow-xl">
                                <div className="relative group">
                                    <img
                                        src={carousal}
                                        alt=""
                                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 ">
                                        March 19
                                    </span>
                                </div>
                                <div className="p-5 flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-500">
                                        Nisi magni odit consequatur autem nulla dolorem
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <div className="flex items-center mr-4">
                                            <i className="bi bi-person-fill text-gray-500"></i>
                                            <span className="ml-2">Julia Parker</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="bi bi-folder-fill text-gray-500"></i>
                                            <span className="ml-2">Economics</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et.
                                        Quo libero rerum voluptatem pariatur nam.
                                    </p>
                                    <hr className="mb-4 border-gray-300" />
                                    <a href="blog-details.html" className="flex items-center text-green-500 hover:underline">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                            <article className="relative bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:shadow-xl">
                                <div className="relative group">
                                    <img
                                        src={carousal}
                                        alt=""
                                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 ">
                                        December 12
                                    </span>
                                </div>
                                <div className="p-5 flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-500">
                                        Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <div className="flex items-center mr-4">
                                            <i className="bi bi-person-fill text-gray-500"></i>
                                            <span className="ml-2">John Doe</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="bi bi-folder-fill text-gray-500"></i>
                                            <span className="ml-2">Politics</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.
                                        Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                    </p>
                                    <hr className="mb-4 border-gray-300" />
                                    <a href="blog-details.html" className="flex items-center text-green-500 hover:underline">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </article>
                            <article className="relative bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:shadow-xl">
                                <div className="relative group">
                                    <img
                                        src={carousal}
                                        alt=""
                                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 ">
                                        March 19
                                    </span>
                                </div>
                                <div className="p-5 flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-500">
                                        Nisi magni odit consequatur autem nulla dolorem
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <div className="flex items-center mr-4">
                                            <i className="bi bi-person-fill text-gray-500"></i>
                                            <span className="ml-2">Julia Parker</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="bi bi-folder-fill text-gray-500"></i>
                                            <span className="ml-2">Economics</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et.
                                        Quo libero rerum voluptatem pariatur nam.
                                    </p>
                                    <hr className="mb-4 border-gray-300" />
                                    <a href="blog-details.html" className="flex items-center text-green-500 hover:underline">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </article>
                            <article className="relative bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:shadow-xl">
                                <div className="relative group">
                                    <img
                                        src={carousal}
                                        alt=""
                                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 ">
                                        March 19
                                    </span>
                                </div>
                                <div className="p-5 flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-500">
                                        Nisi magni odit consequatur autem nulla dolorem
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <div className="flex items-center mr-4">
                                            <i className="bi bi-person-fill text-gray-500"></i>
                                            <span className="ml-2">Julia Parker</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="bi bi-folder-fill text-gray-500"></i>
                                            <span className="ml-2">Economics</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et.
                                        Quo libero rerum voluptatem pariatur nam.
                                    </p>
                                    <hr className="mb-4 border-gray-300" />
                                    <a href="blog-details.html" className="flex items-center text-green-500 hover:underline">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                <section id="blog-pagination" className="pt-0 text-gray-600">
                    <div className="container mx-auto flex justify-center">
                        <ul className="flex p-0 m-0 list-none space-x-2">
                            <li className="transition duration-300">
                                <a href="#" className="px-4 py-2 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white">
                                    <i className="bi bi-chevron-left"></i>
                                </a>
                            </li>
                            <li className="transition duration-300">
                                <a href="#" className="px-4 py-2 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white">1</a>
                            </li>
                            <li className="transition duration-300">
                                <a href="#" className="px-4 py-2 flex items-center justify-center bg-green-500 text-white">2</a>
                            </li>
                            <li className="transition duration-300">
                                <a href="#" className="px-4 py-2 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white">3</a>
                            </li>
                            <li className="transition duration-300">
                                <a href="#" className="px-4 py-2 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white">4</a>
                            </li>
                            <li className="px-4 py-2">...</li>
                            <li className="transition duration-300">
                                <a href="#" className="px-4 py-2 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white">10</a>
                            </li>
                            <li className="transition duration-300">
                                <a href="#" className="px-4 py-2 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white">
                                    <i className="bi bi-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Blog