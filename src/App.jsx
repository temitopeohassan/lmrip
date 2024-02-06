








import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar'; // Assuming your Navbar is in a separate file
import Footer from './components/Footer';

import Home from "./pages/Home";
import "./styles.css";
import "./assets/fonts/IBMPlexMono-Bold.ttf";
import "./assets/fonts/IBMPlexMono-BoldItalic.ttf";
import "./assets/fonts/IBMPlexMono-ExtraLight.ttf";
import "./assets/fonts/IBMPlexMono-ExtraLightItalic.ttf";
import "./assets/fonts/IBMPlexMono-Italic.ttf";
import "./assets/fonts/IBMPlexMono-Light.ttf";
import "./assets/fonts/IBMPlexMono-LightItalic.ttf";
import "./assets/fonts/IBMPlexMono-Medium.ttf";
import "./assets/fonts/IBMPlexMono-MediumItalic.ttf";
import "./assets/fonts/IBMPlexMono-Regular.ttf";
import "./assets/fonts/IBMPlexMono-SemiBold.ttf";
import "./assets/fonts/IBMPlexMono-SemiBoldItalic.ttf";
import "./assets/fonts/IBMPlexMono-Thin.ttf";
import "./assets/fonts/IBMPlexMono-ThinItalic.ttf";



const App = () => {
  return (
    <Router>
    <Navbar />
    <Home/>
    <Footer />

  </Router>
  );
};

export default App;