import { Fragment } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </Fragment>
  );
};

export default Service;
