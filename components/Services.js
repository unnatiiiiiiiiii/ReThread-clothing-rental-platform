function Services() {
    try {
        const services = [
            {
                id: 'rental',
                title: 'Clothing Rental',
                description: 'Rent high-quality clothing for any occasion with our personalized quiz system.',
                icon: 'fas fa-tshirt',
                image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b'
            },
            {
                id: 'polishing',
                title: 'Luxury Item Care',
                description: 'Professional polishing and repair services for your luxury fashion items.',
                icon: 'fas fa-gem',
                image: 'https://images.unsplash.com/photo-1544441893-675973e31985'
            },
            {
                id: 'recycling',
                title: 'Clothing Recycling',
                description: 'Give your clothes a second life through our sustainable recycling program.',
                icon: 'fas fa-recycle',
                image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f'
            }
        ];

        return (
            <section data-name="services" id="services" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="services-title" className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                data-name={`service-${service.id}`}
                                className="service-card bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <i className={`${service.icon} text-white text-4xl`}></i>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <a
                                        href={`#${service.id}`}
                                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services error:', error);
        reportError(error);
        return null;
    }
}
