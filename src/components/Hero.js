import { Fragment } from "react";
import styles from "./Hero.module.css";

function Hero(props) {
  return (
    <Fragment>
      <div className={styles[`${props.cName}`]}>
        <img alt="hero image" src={props.heroImg} />

        <div className={styles["hero-text"]}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <button className={styles[`${props.btnClass}`]}>
            {props.buttonText}
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;
