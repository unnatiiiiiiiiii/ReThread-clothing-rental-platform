function formatCurrency(amount, currency = 'INR') {
    try {
        if (currency === 'INR') {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR'
            }).format(amount);
        }
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    } catch (error) {
        console.error('Format currency error:', error);
        return `₹${amount}`;
    }
}

function calculateRentalCost(basePrice, duration, itemType) {
    try {
        const typeMultipliers = {
            'Formal Wear': 1.5,
            'Casual Wear': 1.0,
            'Business Attire': 1.2,
            'Party Wear': 1.3
        };

        const multiplier = typeMultipliers[itemType] || 1.0;
        // Convert base price to INR (approximate conversion rate)
        const baseInINR = basePrice * 83;
        return baseInINR * multiplier * duration;
    } catch (error) {
        console.error('Calculate rental cost error:', error);
        return basePrice * duration;
    }
}

function validateRecyclingForm(formData) {
    try {
        const errors = {};

        if (!formData.itemType) {
            errors.itemType = 'Item type is required';
        }

        if (!formData.condition) {
            errors.condition = 'Condition is required';
        }

        if (!formData.material) {
            errors.material = 'Material is required';
        }

        if (!formData.quantity || formData.quantity < 1) {
            errors.quantity = 'Please enter a valid quantity';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    } catch (error) {
        console.error('Validate recycling form error:', error);
        return {
            isValid: false,
            errors: { general: 'Validation failed' }
        };
    }
}

function getServiceDescription(serviceType) {
    try {
        const descriptions = {
            rental: {
                title: 'Clothing Rental Service',
                details: [
                    'Wide selection of fashion items',
                    'Flexible rental periods',
                    'Professional cleaning included',
                    'Size adjustments available'
                ]
            },
            polishing: {
                title: 'Luxury Item Care',
                details: [
                    'Expert cleaning and restoration',
                    'Leather conditioning',
                    'Metal polishing',
                    'Minor repairs included'
                ]
            },
            recycling: {
                title: 'Clothing Recycling Program',
                details: [
                    'Sustainable disposal',
                    'Material recovery',
                    'Environmental impact reduction',
                    'Recycling certificates provided'
                ]
            }
        };

        return descriptions[serviceType] || {
            title: 'Service Information',
            details: ['Service details not available']
        };
    } catch (error) {
        console.error('Get service description error:', error);
        return {
            title: 'Service Information',
            details: ['Service details not available']
        };
    }
}

function generateBookingReference() {
    try {
        const prefix = 'RT';
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.random().toString(36).substring(2, 5).toUpperCase();
        return `${prefix}${timestamp}${random}`;
    } catch (error) {
        console.error('Generate booking reference error:', error);
        return `RT${Date.now()}`;
    }
}
