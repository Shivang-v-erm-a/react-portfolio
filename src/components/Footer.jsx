import React from "react";
import Image from '../assets/myImage.jpg'; 
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={Image}
          alt="Founder"
        />

        <h2>Shivang Verma</h2>
        <p>They say that time flies <br /> So i killed it !!</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/shivang-verma-b6a9b0256" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/shivang_vermaa/?next=%2F&hl=en" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Shivang-v-erm-a" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;