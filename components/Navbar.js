function Navbar() {
    try {
        return (
            <nav data-name="navbar" className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 data-name="logo" className="text-2xl font-bold text-indigo-600">ReThread</h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a data-name="nav-home" href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
                            <a data-name="nav-services" href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
                            <a data-name="nav-gallery" href="#gallery" className="text-gray-700 hover:text-indigo-600">Gallery</a>
                            <a data-name="nav-testimonials" href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
                            <a data-name="nav-contact" href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar error:', error);
        reportError(error);
        return null;
    }
}
