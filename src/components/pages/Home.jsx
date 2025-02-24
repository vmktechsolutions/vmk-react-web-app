
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import Crousal from "../Crousal.jsx";
import About from "../About.jsx";
import Services from "../Services.jsx";
import Portfolio from "../Portfolio.jsx";
import Clients from "../Clients.jsx";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Img from '../../assets/bg.jpg';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [modalShown, setModalShown] = useState(false);

    // Function to open modal with animation delay
    const openModal = () => {
        setIsModalOpen(true);
        setTimeout(() => setIsAnimating(true), 10);
    };

    // Function to close modal smoothly
    const closeModal = () => {
        setIsAnimating(false);
        setTimeout(() => setIsModalOpen(false), 300);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!modalShown) {
                openModal();
                setModalShown(true); // Mark modal as shown
                window.removeEventListener("scroll", handleScroll); // Remove listener after showing modal once
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
    }, [modalShown]);

    const handleChange = () => {

    }

    return (
        <div>
            {/* Pass openModal function to Crousal component */}
            <Crousal openModal={openModal} />

            {/* Modal */}
            {isModalOpen && (
                <div
                    className={`fixed inset-0 z-[1000] flex items-center justify-center 
                    bg-black bg-opacity-60 backdrop-blur-sm 
                    transition-opacity duration-300 
                    ${isAnimating ? "opacity-100" : "opacity-0"}`}
                >
                    <div
                        className={`relative m-4 p-4 w-[70%] h-full rounded-lg shadow-sm transform transition-transform duration-300 
                        ${isAnimating ? "scale-100" : "scale-90"}`}
                    >
                        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-40">
                            <div className="relative w-full p-10 bg-white rounded-lg shadow-lg"
                                style={{
                                    backgroundImage: `url(${Img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }} >
                                <button onClick={closeModal} className="absolute top-3 right-3 text-black">
                                    <FaTimes size={20} />
                                </button>
                                <h2 className="text-2xl font-bold mb-2">Book Your Consultation Today!</h2>
                                <p className="text-gray-600 mb-4">Our company takes pride in its capacity to meet its client's needs and create flexible and scalable services.</p>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" name="fullName" placeholder="Full Name*" className="border p-2 rounded w-full" onChange={handleChange} />
                                        <input type="email" name="email" placeholder="Enter Email*" className="border p-2 rounded w-full" onChange={handleChange} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" name="phone" placeholder="📞 081234 56789" className="border p-2 rounded w-full" onChange={handleChange} />
                                        <select name="service" className="border p-2 rounded w-full" onChange={handleChange}>
                                            <option>Services</option>
                                            <option>Consulting</option>
                                            <option>Development</option>
                                            <option>Design</option>
                                        </select>
                                    </div>
                                    <textarea name="message" placeholder="Message" className="border p-2 rounded w-full h-20"></textarea>
                                    <button type="submit" className="w-full bg-black text-white py-2 rounded">Schedule Call</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Navbar />
            <About />
            <Services />
            <Portfolio />
            <Clients />
            <Footer />
        </div>
    );
};

export default Home;
