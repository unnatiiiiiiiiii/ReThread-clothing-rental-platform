function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <Hero />
                <Services />
                <RentalQuiz />
                <PolishingService />
                <RecyclingForm />
                <Gallery />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
