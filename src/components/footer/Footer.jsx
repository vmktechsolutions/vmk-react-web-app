import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    const sty = "hover:scale-105 transition-transform duration-1000 hover:text-green-500";
    const stty = "hover:text-green-500 hover:scale-105 transition-transform duration-1000 hover:font-semibold";    

    return (
        <footer className="bg-gray-900 text-gray-300 text-sm relative w-full bottom-0 mt-auto">
            <div className="container mx-auto px-4 py-10 border-t border-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center sm:text-left">
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white">Company</Link>
                        <div className="mt-4 text-gray-400">
                            <p className={sty}>VMK Tech Solutions</p>
                            <p className={sty}>India, Noida sec - 62, ICONIC</p>
                            <p className={sty}><strong>Phone:</strong> +91 95571-10400</p>
                            <p className={sty}><strong>Email:</strong> karuna@vmktechsolutions.com</p>
                        </div>
                        <div className="flex justify-center sm:justify-start space-x-3 mt-4">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition"><FaTwitter /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition"><FaFacebookF /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-400 hover:text-pink-500 hover:border-pink-500 transition"><FaInstagram /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-400 hover:text-blue-500 hover:border-blue-500 transition"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white pb-3 border-b border-gray-700">Useful Links</h4>
                        <ul className="mt-4 space-y-2 text-gray-400 ">
                            <li className={stty}><Link to="/">Home</Link></li>
                            <li className={stty}><Link to="/about">About Us</Link></li>
                            <li className={stty}><Link to="/services">Services</Link></li>
                            <li className={stty}><Link to="/terms">Terms of Service</Link></li>
                            <li className={stty}><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white pb-3 border-b border-gray-700">Our Services</h4>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li className={stty}><Link to="/">Web Design</Link></li>
                            <li className={stty}><Link to="/">Web Development</Link></li>
                            <li className={stty}><Link to="/">Product Management</Link></li>
                            <li className={stty}><Link to="/">Marketing</Link></li>
                            <li className={stty}><Link to="/">Graphic Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white pb-3 border-b border-gray-700">Our Newsletter</h4>
                        <p className="mt-4 text-gray-400">Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <form className="mt-4 flex flex-col sm:flex-row border border-gray-600 overflow-hidden rounded-full">
                            <input type="email" placeholder="Enter email" className="p-2 w-full bg-gray-800 rounded-s-full text-white focus:outline-none" />
                            <button className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-10 border-t border-gray-700 pt-4">
                    <p>&copy; <strong className="text-white">Company</strong> All Rights Reserved</p>
                    <p className="text-gray-400">Designed by <Link to={"/"}><a className="text-blue-400">VMK</a></Link> Distributed by <Link to={"/"}><a className="text-blue-400">VMK TECH SOLUTIONS</a></Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
