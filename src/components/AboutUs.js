import styles from "./AboutUs.module.css";

function AboutUs() {
    return (
        <div className={styles["about-container"]}>
            <h1>Our History</h1>
            <p>Trippy is owned and managed by Trippy .In Pvt. Ltd, a leading brand in web desinging services and e-commerce solutions. Trippy .In Pvt. Ltd is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence.</p>
            
            <h1>Our Mission</h1>
            <p>Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiviness.</p>

            <h1>Our Vision</h1>
            <p>To sow seeds of par-excellence services with customer centric approach and recap the trust of worldwide clients.</p>
        </div>
    )
}

export default AboutUs;