import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from '../assets/carousal.jpg'

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: img,
      title: "We are professional",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      img: img,
      title: "At vero eos et accusamus",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.",
    },
    {
      id: 3,
      img: img,
      title: "Temporibus autem quibusdam",
      text: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative w-full h-screen text-white overflow-hidden flex flex-col justify-end mt-20">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out transform ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <img src={slide.img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-x-[5%] bottom-80 h-1 w-[90%] bg-green-500">   <hr /></div>
            <div className="absolute inset-0 bg-black h-[38%] mt-[375px] w-[90%] mx-auto bg-opacity-50  flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-4xl font-bold mb-4 sm:text-3xl">{slide.title}</h2>
              <p className="mt-2 max-w-2xl text-lg sm:text-base">{slide.text}</p>
              <Link to="/about" className="mt-6 px-6 py-3 border-2 w-40 border-green-500 rounded-sm text-white font-semibold hover:bg-green-500 transition duration-700">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white">❮</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white">❯</button>
    </section>
  );
};

export default Hero;