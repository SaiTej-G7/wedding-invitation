import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./styles/global.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountDown from './components/CountDown';
import Details from "./components/Details";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <ScrollReveal />
      <CountDown/>   
      <Details />
      <Story />
      <Gallery />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;