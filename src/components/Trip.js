import styles from "./Trip.module.css";
import TripData from "./TripData";
import trip1 from "../assets/4.jpg";
import trip2 from "../assets/10.jpg";
import trip3 from "../assets/3.jpg";

function Trip() {
  return (
    <div className={styles.trip}>
      <h1 className={styles["trip-title"]}>Recent Trips</h1>
      <p className={styles["trip-paragraph"]}>You can discover unique destinations using Google Maps.</p>
      <div className={styles.tripcard}>
        <TripData
          image={trip1}
          heading="Trip in Indonesia"
          text="Indonesia, a diverse archipelago in Southeast Asia, boasts rich cultural heritage, stunning landscapes, and vibrant cities. With over 17,000 islands, it offers a blend of traditions, exotic beaches, lush rainforests, and ancient temples. Its warm hospitality and diverse cuisine make it a captivating destination for travelers seeking unique experiences."
        />
        <TripData
          image={trip2}
          heading="Trip in Malaysia"
          text="Malaysia, situated in Southeast Asia, boasts a diverse blend of cultures, landscapes, and traditions. Its modern cities, such as Kuala Lumpur, are juxtaposed against lush rainforests and stunning beaches. With a mix of Malay, Chinese, Indian, and indigenous influences, Malaysia offers a unique cultural experience, vibrant cuisine, and an array of natural wonders."
          />
        <TripData
          image={trip3}
          heading="Trip in France"
          text="France, located in Western Europe, is renowned for its rich history, art, and culture. Home to iconic landmarks like the Eiffel Tower, Louvre Museum, and romantic cities like Paris, it captivates with its elegance and charm. From exquisite cuisine to picturesque landscapes, France offers a blend of sophistication and natural beauty that enchants visitors worldwide."
        />
      </div>
    </div>
  );
}

export default Trip;
