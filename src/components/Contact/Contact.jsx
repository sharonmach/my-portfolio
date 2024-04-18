import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
          Feel free to reach out! <br />
          Let's Connect and Create! Whether you're looking to collaborate, share
          ideas, or just say hello, I'm all ears. Drop me a line below, and
          let's make magic happen!"
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">sharonmacharia2000@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://github.com/sharonmach">linkedin.com/sharonmach</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.linkedin.com/in/sharon-macharia-80653818a/">
            github.com/sharon-macharia
          </a>
        </li>
      </ul>
    </footer>
  );
};
