// import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import Img from '../../assets/bg.jpg';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
//       <div className="relative w-[600px] p-6 bg-white rounded-lg shadow-lg"
//             style={{
//                 backgroundImage: `url(${Img})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }} >
//         <button className="absolute top-3 right-3 text-black" onClick={() => console.log("Close modal")}> 
//           <FaTimes size={20} />
//         </button>
//         <h2 className="text-2xl font-bold mb-2">Book Your Consultation Today!</h2>
//         <p className="text-gray-600 mb-4">Our company takes pride in its capacity to meet its client's needs and create flexible and scalable services.</p>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" name="fullName" placeholder="Full Name*" className="border p-2 rounded w-full" onChange={handleChange} />
//             <input type="email" name="email" placeholder="Enter Email*" className="border p-2 rounded w-full" onChange={handleChange} />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" name="phone" placeholder="📞 081234 56789" className="border p-2 rounded w-full" onChange={handleChange} />
//             <select name="service" className="border p-2 rounded w-full" onChange={handleChange}>
//               <option>Services</option>
//               <option>Consulting</option>
//               <option>Development</option>
//               <option>Design</option>
//             </select>
//           </div>
//           <textarea name="message" placeholder="Message" className="border p-2 rounded w-full h-20" onChange={handleChange}></textarea>
//           <button type="submit" className="w-full bg-black text-white py-2 rounded">Schedule Call</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React from "react";
import ParticlesBackground from '../particeBackground/ParticlesAnimation'

const CarouselPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {/* Your carousel component */}
        <h1 className="text-3xl font-bold">Carousel Goes Here</h1>
      </div>
    </div>
  );
};

export default CarouselPage;
