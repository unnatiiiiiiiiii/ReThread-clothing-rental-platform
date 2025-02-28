function Contact() {
    try {
        return (
            <section data-name="contact" id="contact" className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 data-name="contact-title" className="text-3xl font-bold text-center mb-8">
                        Contact Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-name="contact-info" className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt text-indigo-600 text-xl w-8"></i>
                                <p>123 Fashion Street, Mumbai, Maharashtra 400001</p>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-phone text-indigo-600 text-xl w-8"></i>
                                <div className="space-y-1">
                                    <p>+91 98765 43xyz</p>
                                    <p>+91 89012 34xyz</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-indigo-600 text-xl w-8"></i>
                                <p>contact@rethread.in</p>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-clock text-indigo-600 text-xl w-8"></i>
                                <p>Mon-Sat: 10AM-8PM, Sun: 11AM-6PM</p>
                            </div>
                        </div>
                        <form data-name="contact-form" className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border rounded"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-2 border rounded h-32"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact error:', error);
        reportError(error);
        return null;
    }
}
