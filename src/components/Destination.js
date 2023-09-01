import styles from "./Destination.module.css";
import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/5.jpg";
import mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import Trip from "./Trip";

function Destination() {
  return (
    <div className={styles.destination}>
      <h1 className={styles["destination-title"]}>Popular Destination</h1>
      <p className={styles["destination-paragraph"]}>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano, located in Batangas, Philippines, is a complex
            stratovolcano known for its breathtaking beauty and geological
            significance. Standing as one of the country's most iconic
            landmarks, Taal Volcano rests within a lake-filled caldera, creating
            a picturesque landscape that draws both tourists and scientists
            alike. Its recent eruptions, including the 2020 phreatic explosion,
            highlight its active nature. Taal Volcano is a vital part of the
            Pacific Ring of Fire, serving as a reminder of the Earth's dynamic
            forces and the delicate balance between its destructive power and
            the allure of its natural marvels."
        img1={mountain1}
        img2={mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldul is a majestic peak located in Batangas, Philippines. This natural gem offers hikers a remarkable experience with its lush landscapes and breathtaking panoramic views. Its trails wind through verdant forests and lead to a summit that overlooks the scenic coastline. As a popular trekking destination, Mt. Daguldul invites adventurers to explore its beauty, making it a must-visit spot for nature enthusiasts and outdoor seekers."
        img1={mountain3}
        img2={mountain4}
      />

      <Trip />
    </div>
  );
}

export default Destination;
