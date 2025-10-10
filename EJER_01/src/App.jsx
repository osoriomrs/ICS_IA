import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/NavBar.jsx';
import CardSection from './components/CardSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <CardSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
