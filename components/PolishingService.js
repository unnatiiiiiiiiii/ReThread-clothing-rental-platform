function PolishingService() {
    try {
        const [selectedItem, setSelectedItem] = React.useState('');
        const [showPrice, setShowPrice] = React.useState(false);

        const priceList = {
            'Leather Bags': {
                basic: 999,
                premium: 1999
            },
            'Shoes': {
                basic: 499,
                premium: 999
            },
            'Watches': {
                basic: 1499,
                premium: 2499
            },
            'Jewelry': {
                basic: 799,
                premium: 1499
            }
        };

        return (
            <section data-name="polishing" id="polishing" className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 data-name="polishing-title" className="text-3xl font-bold text-center mb-8">
                        Luxury Item Care Service
                    </h2>
                    
                    <div className="space-y-6">
                        <div data-name="item-selection">
                            <h3 className="text-xl mb-4">Select Your Item Type</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.keys(priceList).map(item => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setShowPrice(true);
                                        }}
                                        className={`p-4 border rounded-lg transition-colors ${
                                            selectedItem === item ? 'bg-indigo-600 text-white' : 'hover:border-indigo-600'
                                        }`}
                                    >
                                        {item}
                                        <div className={`text-sm ${selectedItem === item ? 'text-white' : 'text-gray-600'} mt-2`}>
                                            From ₹{priceList[item].basic.toLocaleString('en-IN')}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {showPrice && (
                            <div data-name="price-display" className="text-center p-6 bg-white rounded-lg shadow">
                                <h4 className="text-lg mb-4">Service Options for {selectedItem}</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 border rounded-lg">
                                        <h5 className="font-semibold mb-2">Basic Care</h5>
                                        <p className="text-2xl font-bold text-indigo-600">
                                            ₹{priceList[selectedItem].basic.toLocaleString('en-IN')}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-2">Standard cleaning and care</p>
                                    </div>
                                    <div className="p-4 border rounded-lg border-indigo-600">
                                        <h5 className="font-semibold mb-2">Premium Care</h5>
                                        <p className="text-2xl font-bold text-indigo-600">
                                            ₹{priceList[selectedItem].premium.toLocaleString('en-IN')}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-2">Deep cleaning and restoration</p>
                                    </div>
                                </div>
                                <button
                                    className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
                                    onClick={() => alert('Booking service for ' + selectedItem)}
                                >
                                    Book Service
                                </button>
                                <p className="text-sm text-gray-600 mt-2">*Prices include GST</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('PolishingService error:', error);
        reportError(error);
        return null;
    }
}
