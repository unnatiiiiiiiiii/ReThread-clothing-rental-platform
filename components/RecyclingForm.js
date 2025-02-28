function RecyclingForm() {
    try {
        const [formData, setFormData] = React.useState({
            itemType: '',
            condition: '',
            material: '',
            quantity: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            alert('Thank you for contributing to sustainable fashion!');
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section data-name="recycling" id="recycling" className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 data-name="recycling-title" className="text-3xl font-bold text-center mb-8">
                        Clothing Recycling Program
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Item Type</label>
                            <select
                                name="itemType"
                                value={formData.itemType}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="shirts">Shirts</option>
                                <option value="pants">Pants</option>
                                <option value="dresses">Dresses</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Condition</label>
                            <select
                                name="condition"
                                value={formData.condition}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Select Condition</option>
                                <option value="like-new">Like New</option>
                                <option value="gently-used">Gently Used</option>
                                <option value="well-worn">Well Worn</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Material</label>
                            <input
                                type="text"
                                name="material"
                                value={formData.material}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="e.g., Cotton, Polyester"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                min="1"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                        >
                            Submit for Recycling
                        </button>
                    </form>
                </div>
            </section>
        );
    } catch (error) {
        console.error('RecyclingForm error:', error);
        reportError(error);
        return null;
    }
}
