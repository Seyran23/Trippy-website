import { Fragment } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </Fragment>
  );
};

export default Contact;
