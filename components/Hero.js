function Hero() {
    try {
        return (
            <section data-name="hero" id="home" className="relative py-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h2 data-name="hero-title" className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                            Welcome to ReThread
                        </h2>
                        <p data-name="hero-subtitle" className="mt-4 text-xl text-gray-600">
                            Your sustainable fashion destination for clothing rental, luxury item care, and recycling services
                        </p>
                        <div className="mt-8">
                            <a
                                data-name="hero-cta"
                                href="#services"
                                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                            >
                                Explore Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero error:', error);
        reportError(error);
        return null;
    }
}
