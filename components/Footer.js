function Footer() {
    try {
        const currentYear = new Date().getFullYear();

        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="footer-about" className="space-y-4">
                            <h3 className="text-xl font-bold">ReThread</h3>
                            <p className="text-gray-400">
                                Your sustainable fashion destination. Making fashion circular through rental, care, and recycling services.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        <div data-name="footer-services" className="space-y-4">
                            <h3 className="text-xl font-bold">Our Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#rental" className="text-gray-400 hover:text-white transition-colors">
                                        Clothing Rental
                                    </a>
                                </li>
                                <li>
                                    <a href="#polishing" className="text-gray-400 hover:text-white transition-colors">
                                        Luxury Item Care
                                    </a>
                                </li>
                                <li>
                                    <a href="#recycling" className="text-gray-400 hover:text-white transition-colors">
                                        Recycling Program
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-name="footer-links" className="space-y-4">
                            <h3 className="text-xl font-bold">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-name="footer-newsletter" className="space-y-4">
                            <h3 className="text-xl font-bold">Newsletter</h3>
                            <p className="text-gray-400">
                                Subscribe to receive updates about our services and sustainable fashion tips.
                            </p>
                            <form className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div data-name="footer-bottom" className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; {currentYear} ReThread. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer error:', error);
        reportError(error);
        return null;
    }
}
