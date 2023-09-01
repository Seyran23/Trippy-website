import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </Fragment>
  );
};

export default About;
