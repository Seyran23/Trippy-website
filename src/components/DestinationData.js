import { Component } from "react";
import styles from "./Destination.module.css";

import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/3.jpg";
import mountain4 from "../assets/4.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={styles[`${this.props.className}`]}>
        <div className={styles["des-text"]}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className={styles.image}>
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
