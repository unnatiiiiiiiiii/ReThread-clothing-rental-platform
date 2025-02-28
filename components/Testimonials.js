function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "Regular Customer",
                comment: "ReThread has revolutionized how I think about fashion. Their rental service is perfect for special occasions!",
                avatar: "https://randomuser.me/api/portraits/women/1.jpg"
            },
            {
                name: "Michael Chen",
                role: "Luxury Item Owner",
                comment: "The polishing service is exceptional. My vintage leather bags look brand new after their treatment.",
                avatar: "https://randomuser.me/api/portraits/men/2.jpg"
            },
            {
                name: "Emma Wilson",
                role: "Eco-conscious Consumer",
                comment: "I love contributing to sustainable fashion through their recycling program. It's making a real difference!",
                avatar: "https://randomuser.me/api/portraits/women/3.jpg"
            }
        ];

        return (
            <section data-name="testimonials" id="testimonials" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 data-name="testimonials-title" className="text-3xl font-bold text-center mb-12">
                        What Our Customers Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                data-name={`testimonial-${index}`}
                                className="testimonial-card p-6"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{testimonial.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials error:', error);
        reportError(error);
        return null;
    }
}
