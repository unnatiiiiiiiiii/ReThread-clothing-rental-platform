function RentalQuiz() {
    try {
        const [step, setStep] = React.useState(1);
        const [answers, setAnswers] = React.useState({
            type: '',
            occasion: '',
            duration: '',
            size: ''
        });

        const handleAnswer = (question, answer) => {
            setAnswers(prev => ({
                ...prev,
                [question]: answer
            }));
            setStep(prev => prev + 1);
        };

        const calculateCost = () => {
            const baseRates = {
                'Formal Wear': 1499,
                'Casual Wear': 799,
                'Business Attire': 999,
                'Party Wear': 1299
            };
            
            const baseRate = baseRates[answers.type] || 799;
            const duration = parseInt(answers.duration) || 1;
            return baseRate * duration;
        };

        return (
            <section data-name="rental-quiz" id="rental" className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 data-name="rental-title" className="text-3xl font-bold text-center mb-8">
                        Find Your Perfect Rental
                    </h2>
                    
                    {step === 1 && (
                        <div data-name="quiz-step-1" className="space-y-4">
                            <h3 className="text-xl mb-4">What type of clothing are you looking for?</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['Formal Wear', 'Casual Wear', 'Business Attire', 'Party Wear'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => handleAnswer('type', type)}
                                        className="quiz-option p-4 border rounded-lg hover:border-indigo-600"
                                    >
                                        {type}
                                        <div className="text-sm text-gray-600 mt-2">
                                            From ₹{type === 'Formal Wear' ? '1,499' : 
                                                  type === 'Casual Wear' ? '799' : 
                                                  type === 'Business Attire' ? '999' : '1,299'}/day
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div data-name="quiz-step-2" className="space-y-4">
                            <h3 className="text-xl mb-4">For what occasion?</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['Wedding', 'Business Meeting', 'Party', 'Daily Wear'].map(occasion => (
                                    <button
                                        key={occasion}
                                        onClick={() => handleAnswer('occasion', occasion)}
                                        className="quiz-option p-4 border rounded-lg hover:border-indigo-600"
                                    >
                                        {occasion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div data-name="quiz-step-3" className="space-y-4">
                            <h3 className="text-xl mb-4">How long do you need it for? (days)</h3>
                            <input
                                type="number"
                                min="1"
                                className="w-full p-2 border rounded"
                                onChange={(e) => handleAnswer('duration', e.target.value)}
                            />
                        </div>
                    )}

                    {step === 4 && (
                        <div data-name="quiz-results" className="text-center">
                            <h3 className="text-xl mb-4">Your Estimated Cost</h3>
                            <p className="text-3xl font-bold text-indigo-600">₹{calculateCost().toLocaleString('en-IN')}</p>
                            <p className="text-sm text-gray-600 mt-2">*Includes GST and basic insurance</p>
                            <button
                                onClick={() => setStep(1)}
                                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
                            >
                                Start Over
                            </button>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('RentalQuiz error:', error);
        reportError(error);
        return null;
    }
}
