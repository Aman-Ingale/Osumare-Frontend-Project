import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import StartOrganizingSection from './components/StartOrganizingSection';
import SubmissionTable from './components/SubmissionTable';
import Footer from './components/Footer';
import FormModal from './components/FormModal';
import ThankYouModal from './components/ThankYouModal';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);
  const handleFormSubmit = (data) => {
    setSubmissions([
      ...submissions,
      { ...data, timestamp: new Date().toLocaleString() },
    ]);
    setIsFormOpen(false);
    setIsThankYouOpen(true);
  };
  const handleCloseThankYou = () => setIsThankYouOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaff]">
      <Header onStartOrganizing={handleOpenForm}/>
      <main className="flex-1">
        <HeroSection onStartOrganizing={handleOpenForm} />
        <FeaturesSection />
        <TestimonialsSection />
        <StartOrganizingSection onStartOrganizing={handleOpenForm} />
        <SubmissionTable submissions={submissions} />
      </main>
      <Footer />
      <FormModal open={isFormOpen} onClose={handleCloseForm} onSubmit={handleFormSubmit} />
      <ThankYouModal open={isThankYouOpen} onClose={handleCloseThankYou} />
    </div>
  );
}

export default App;
