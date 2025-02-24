import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router';


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <main className="main mt-20 bg-green-500">
                {/* Page Title */}
                <div className="page-title bg-accent py-6">
                    <div className="container mx-auto px-40 flex flex-col lg:flex-row justify-between items-center">
                        <h1 className="mb-2 lg:mb-0 text-2xl text-white font-bold">Pricing</h1>
                        <nav className="breadcrumbs">
                            <ol className="flex space-x-2 text-white">
                                <li>
                                    <Link to="/" className="hover:text-green-500 hover:underline">Home</Link>
                                </li>
                                <li className="text-white">/ Pricing</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>
            <section id="pricing" className="py-12 bg-gray-100">
                <div className="container mx-auto px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Free Plan */}
                        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-300 text-center transform transition duration-500 scale-95 hover:scale-100">
                            <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
                            <p className="text-gray-600 text-sm">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                            <h4 className="text-5xl font-bold text-green-500 mt-4">
                                <sup className="text-2xl">$</sup>0<span className="text-lg text-gray-500"> / month</span>
                            </h4>
                            <a href="#" className="block mt-5 px-8 py-3 text-green-500 border border-green-500 rounded-md text-lg font-medium transition hover:bg-green-500 hover:text-white">
                                Start a free trial
                            </a>
                            <p className="text-sm text-gray-500 mt-3">No credit card required</p>
                            <ul className="mt-5 text-left space-y-2">
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Quam adipiscing vitae proin</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Nec feugiat nisl pretium</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Nulla at volutpat diam uteera</li>
                                <li className="flex items-center text-gray-400 line-through"><i className="bi bi-x text-red-500 text-xl pr-2"></i> Pharetra massa massa ultricies</li>
                                <li className="flex items-center text-gray-400 line-through"><i className="bi bi-x text-red-500 text-xl pr-2"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                        </div>

                        {/* Business Plan */}
                        <div className="bg-white p-10 rounded-2xl shadow-md border border-green-500 text-center relative transform transition duration-500 scale-95 hover:scale-100">
                            <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">Popular</span>
                            <h3 className="text-xl font-semibold mb-4">Business Plan</h3>
                            <p className="text-gray-600 text-sm">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                            <h4 className="text-5xl font-bold text-green-500 mt-4">
                                <sup className="text-2xl">$</sup>29<span className="text-lg text-gray-500"> / month</span>
                            </h4>
                            <a href="#" className="block mt-5 px-8 py-3 bg-green-500 text-white rounded-md text-lg font-medium transition hover:bg-green-600">
                                Start a free trial
                            </a>
                            <p className="text-sm text-gray-500 mt-3">No credit card required</p>
                            <ul className="mt-5 text-left space-y-2">
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Quam adipiscing vitae proin</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Nec feugiat nisl pretium</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Nulla at volutpat diam uteera</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Pharetra massa massa ultricies</li>
                                <li className="flex items-center text-gray-400 line-through"><i className="bi bi-x text-red-500 text-xl pr-2"></i> Iure nihil dolores recusandae</li>
                            </ul>
                        </div>

                        {/* Developer Plan */}
                        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-300 text-center transform transition duration-500 scale-95 hover:scale-100">
                            <h3 className="text-xl font-semibold mb-4">Developer Plan</h3>
                            <p className="text-gray-600 text-sm">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                            <h4 className="text-5xl font-bold text-green-500 mt-4">
                                <sup className="text-2xl">$</sup>49<span className="text-lg text-gray-500"> / month</span>
                            </h4>
                            <a href="#" className="block mt-5 px-8 py-3 text-green-500 border border-green-500 rounded-md text-lg font-medium transition hover:bg-green-500 hover:text-white">
                                Start a free trial
                            </a>
                            <p className="text-sm text-gray-500 mt-3">No credit card required</p>
                            <ul className="mt-5 text-left space-y-2">
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Quam adipiscing vitae proin</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Nec feugiat nisl pretium</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Nulla at volutpat diam uteera</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Pharetra massa massa ultricies</li>
                                <li className="flex items-center"><i className="bi bi-check text-green-500 text-xl pr-2"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default Pricing;
