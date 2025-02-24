import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            <Navbar />
            <main className="main mt-20 bg-green-500">
                {/* Page Title */}
                <div className="page-title bg-accent py-6">
                    <div className="container mx-auto px-40 flex flex-col lg:flex-row justify-between items-center">
                        <h1 className="mb-2 lg:mb-0 text-2xl text-white font-bold">Contact</h1>
                        <nav className="breadcrumbs">
                            <ol className="flex space-x-2 text-white">
                                <li>
                                    <Link to="/" className="hover:text- hover:underline">Home</Link>
                                </li>
                                <li className="text-white">/ Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>
            <section id="contact" className="py-16 bg-gray-100">
                <motion.div className="mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <iframe
                        className="w-full h-96 rounded-lg shadow-md"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </motion.div>
                <div className="container mx-auto px-6">
                    <motion.div className="grid md:grid-cols-2 gap-10 px-20 bg-white p-8 shadow-md" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="space-y-5">
                            <h3 className="text-3xl font-bold text-gray-800">Get in touch</h3>
                            <p className="text-gray-600">Feel free to reach out to us with any inquiries or feedback. We are here to help!</p>
                            <motion.div className="flex items-start space-x-4">
                                <i className="bi bi-geo-alt text-2xl text-green-500"></i>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Location:</h4>
                                    <p className="text-gray-600">A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </motion.div>
                            <motion.div className="flex items-start space-x-4">
                                <i className="bi bi-envelope text-2xl text-green-500"></i>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Email:</h4>
                                    <p className="text-gray-600">info@example.com</p>
                                </div>
                            </motion.div>
                            <motion.div className="flex items-start space-x-4">
                                <i className="bi bi-phone text-2xl text-green-500"></i>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Call:</h4>
                                    <p className="text-gray-600">+1 5589 55488 55</p>
                                </div>
                            </motion.div>
                        </div>
                        <div>
                            {isSubmitted && (
                                <motion.div className="mb-4 p-3 bg-green-100 text-green-700 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    Your message has been sent successfully!
                                </motion.div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 hover:border-green-500"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 hover:border-green-500"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 hover:border-green-500"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 h-32 hover:border-green-500"
                                ></textarea>
                                <div className="text-center">
                                    <motion.button
                                        type="submit"
                                        className="bg-green-500 text-white px-6 py-2 hover:bg-green-600 transition"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactSection;
