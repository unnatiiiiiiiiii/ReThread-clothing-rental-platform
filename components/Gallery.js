function Gallery() {
    try {
        const images = [
            { url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04', caption: 'Sustainable Fashion' },
            { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e', caption: 'Luxury Care' },
            { url: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f', caption: 'Recycling Program' },
            { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', caption: 'Rental Collection' },
            { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b', caption: 'Formal Wear' },
            { url: 'https://images.unsplash.com/photo-1445205170230-053b83016050', caption: 'Luxury Accessories' },
            { url: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93', caption: 'Sustainable Style' },
            { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27', caption: 'Eco Fashion' },
            { url: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908', caption: 'Designer Pieces' },
            { url: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe', caption: 'Vintage Collection' },
            { url: 'https://images.unsplash.com/photo-1544441893-675973e31985', caption: 'Premium Care' },
            { url: 'https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b', caption: 'Fashion Forward' }
        ];

        return (
            <section data-name="gallery" id="gallery" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 data-name="gallery-title" className="text-3xl font-bold text-center mb-12">
                        Our Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                data-name={`gallery-item-${index}`}
                                className="relative overflow-hidden rounded-lg shadow-lg gallery-image"
                            >
                                <img
                                    src={image.url}
                                    alt={image.caption}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                    <p className="text-center">{image.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery error:', error);
        reportError(error);
        return null;
    }
}
