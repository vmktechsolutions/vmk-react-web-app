import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-16 text-center">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg p-10 rounded-md text-center transition duration-300 hover:shadow-xl animate-div"
                    >
                        <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4 text-cyan-500 text-6xl">
                            <i className="bi bi-activity bg-gray-100 rounded-full p-4 cursor-pointer hover:bg-cyan-500 hover:duration-700 hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">We build responsive and high-performance web applications.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg p-10 rounded-md text-center transition duration-300 hover:shadow-xl animate-div"
                    >
                        <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4 text-orange-500 text-6xl">
                            <i className="bi bi-broadcast bg-gray-100 rounded-full p-4 cursor-pointer hover:bg-orange-500 hover:duration-700 hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p className="text-gray-600">Creating intuitive and user-friendly designs.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg p-10 rounded-md text-center transition duration-300 hover:shadow-xl animate-div"
                    >
                        <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4 text-teal-500 text-6xl">
                            <i className="bi bi-easel bg-gray-100 rounded-full p-4 cursor-pointer hover:bg-teal-500 hover:duration-700 hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
                        <p className="text-gray-600">End-to-end solutions for your business needs.</p>
                    </motion.div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg p-10 rounded-md text-center transition duration-300 hover:shadow-xl animate-div"
                    >
                        <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4 text-cyan-500 text-6xl">
                            <i className="bi bi-activity bg-gray-100 rounded-full p-4 cursor-pointer hover:bg-cyan-500 hover:duration-700 hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">We build responsive and high-performance web applications.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg p-10 rounded-md text-center transition duration-300 hover:shadow-xl animate-div"
                    >
                        <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4 text-orange-500 text-6xl">
                            <i className="bi bi-broadcast bg-gray-100 rounded-full p-4 cursor-pointer hover:bg-orange-500 hover:duration-700 hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p className="text-gray-600">Creating intuitive and user-friendly designs.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg p-10 rounded-md text-center transition duration-300 hover:shadow-xl animate-div"
                    >
                        <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4 text-teal-500 text-6xl">
                            <i className="bi bi-easel bg-gray-100 rounded-full p-4 cursor-pointer hover:bg-teal-500 hover:duration-700 hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
                        <p className="text-gray-600">End-to-end solutions for your business needs.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;

// Tailwind animation CSS

