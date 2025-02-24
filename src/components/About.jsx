import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/carousal.jpg";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-32">
                <div className="relative flex flex-wrap lg:flex-nowrap items-center">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 lg:max-w-[65%] lg:mb-20">
                            Consequatur eius et magnam
                        </h2>
                        <div className="p-6 sm:p-10 bg-black bg-opacity-5 rounded-lg lg:pr-[10%] xl:pr-[35%]">
                            <h4 className="uppercase text-lg text-gray-500">Est 1988</h4>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">Our Story</h3>
                            <p className="mt-2 text-gray-600">
                                Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem.
                                Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li className="flex items-center">
                                    <span className="text-green-500 text-xl mr-2">✔</span> Ullamco laboris nisi ut aliquip ex ea commo
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 text-xl mr-2">✔</span> Duis aute irure dolor in reprehenderit in
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 text-xl mr-2">✔</span> Ullamco laboris nisi ut aliquip ex ea
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-600">
                                Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet.
                            </p>
                            <div className="mt-6 flex items-center space-x-3 text-lg">
                                <span className="text-3xl text-red-500 transition duration-300 hover:text-red-600">▶</span>
                                <a
                                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                    className="text-blue-600 underline hover:text-blue-800 transition duration-300"
                                >
                                    Watch Video
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0" data-aos="zoom-out" data-aos-delay="200">
                        <img
                            src={img}
                            alt="About"
                            className="w-full sm:w-[80%] lg:mb-24 lg:mr-10 md:w-[90%] lg:w-[100%] lg:h-[900px] max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-cover object-center shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
