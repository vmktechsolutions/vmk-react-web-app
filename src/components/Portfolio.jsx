import { useState } from "react";
import img from '../assets/carousal.jpg'
import { Link } from "react-router";
import { motion } from "framer-motion";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (

        <motion.section id="portfolio" className="py-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
                <div className="lg:inset-x-[45%] absolute w-36 h-1 bg-green-500 justify-center text-center items-center"><hr /></div>
                <p className="text-gray-600 mt-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container mx-auto px-20">
                <ul className="flex justify-center space-x-4 mb-8 mt-16">
                    <li
                        className={`cursor-pointer px-4 py-2 h-10 w-20 text-center rounded-md text-lg hover:bg-green-500 text-gray-500 font-medium transition ${activeFilter === "all" ? "bg-green-600 text-white" : "bg-white"}`}
                        onClick={() => handleFilterChange("all")}
                    >
                        All
                    </li>
                    <li
                        className={`cursor-pointer px-4 py-2 h-10 w-20 text-center rounded-md text-lg hover:bg-green-500 text-gray-500 font-medium transition ${activeFilter === "app" ? "bg-green-600 text-white" : "bg-white"}`}
                        onClick={() => handleFilterChange("app")}
                    >
                        App
                    </li>
                    <li
                        className={`cursor-pointer px-4 py-2 h-10 w-20 text-center rounded-md text-lg hover:bg-green-500 text-gray-500 font-medium transition ${activeFilter === "product" ? "bg-green-600 text-white" : "bg-white"}`}
                        onClick={() => handleFilterChange("product")}
                    >
                        Card
                    </li>
                    <li
                        className={`cursor-pointer px-4 py-2 h-10 w-20 text-center rounded-md text-lg hover:bg-green-500 text-gray-500 font-medium transition ${activeFilter === "branding" ? "bg-green-600 text-white" : "bg-white"}`}
                        onClick={() => handleFilterChange("branding")}
                    >
                        Web
                    </li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <motion.div key={item} className="relative overflow-hidden group" initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item * 0.1 }}>
                            <img src={`${img}`} width={400} height={300} className="w-full h-auto transform transition duration-500 group-hover:scale-105" alt={`Portfolio Item ${item}`} />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
                                <h4 className="text-white text-lg font-semibold">Portfolio Item {item}</h4>
                                <p className="text-gray-300 text-sm">Lorem ipsum, dolor sit</p>
                                <div className="flex space-x-4 mt-2">
                                    <a href={`/assets/img/masonry-portfolio/masonry-portfolio-${img}.jpg`} className="text-white text-2xl">
                                        🔍
                                    </a>
                                    <Link href="/portfolio-details">
                                        <a className="text-white text-2xl">🔗</a>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;
