import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("  ");
  const [email, setEmail] = useState(" ");
  const [text, setText] = useState(" ");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.section}>
      <div className={ styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="Via Support Chat"
            icon={<MdMessage fontSize="25px" />}
          />
          <Button text="Via Call" icon={<IoMdCall fontSize="25px" />} />
        </div>

        <Button
          isOutline={true}
          text="Via Email Form"
          icon={<HiMail fontSize="25px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5" />
          </div>

          <Button text="SUBMIT" />

          <div className={styles.freestyle}>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>  
    </div>
    <div className={styles.contact_image}>
    <img src="/images/contact.svg" alt="contact image" />
    </div>
    </section>
    
  );
};

export default ContactForm;
