import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/homescreen/HomeScreen';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Scrollup from './components/gadgets/Scrollup';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer />
      <Scrollup />
    </Router>
  );
};

export default App;
