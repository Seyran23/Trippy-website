import styles from "./ContactForm.module.css";

function ContactForm() {
    return (
        <div className={styles["form-container"]}>
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows={4}></textarea>
                <button className="btn">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;