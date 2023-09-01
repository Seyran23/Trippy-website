import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import homeImg from "../assets/12.jpg";

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </Fragment>
  );
}

export default Home;
