import { motion } from "framer-motion";
import client1 from '../assets/clients/client-1.png'
import client2 from '../assets/clients/client-2.png'
import client3 from '../assets/clients/client-3.png'
import client4 from '../assets/clients/client-4.png'
import client5 from '../assets/clients/client-5.png'
import client6 from '../assets/clients/client-6.png'
import client7 from '../assets/clients/client-7.png'
import client8 from '../assets/clients/client-8.png'

const ClientsSection = () => {
    return (
        <div>
            <div className="py-16 text-center bg-white">
                <motion.h2
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    CLIENTS
                </motion.h2>
                <motion.p
                    className="text-gray-500 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </motion.p>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-4 md:px-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client1} alt="myob" className="h-16" whileHover={{ scale: 1.25 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client2} alt="BELIMO" className="h-16" whileHover={{ scale: 1.25 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client3} alt="LifeGroups" className="h-16" whileHover={{ scale: 1.25 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client4} alt="grabyo" className="h-16" whileHover={{ scale: 1.25 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client5} alt="myob" className="h-16" whileHover={{ scale: 1.25 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client6} alt="BELIMO" className="h-16" whileHover={{ scale: 1.25 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client7} alt="LifeGroups" className="h-16" whileHover={{ scale: 1.10 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center h-40 border bg-white">
                        <motion.img src={client8} alt="grabyo" className="h-16" whileHover={{ scale: 1.25 }} transition={{ duration: 0.5 }} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ClientsSection;