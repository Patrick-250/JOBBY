import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/Wrappers/LandingPage";
import main from "../assets/images/main.svg";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Stream and live your <span>Vibe </span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            quod modi quasi voluptatibus aut dolorum neque recusandae, ab
            repellat sit inventore fugit? Veritatis dolore unde officia dolorem
            quam rem commodi.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Explore
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
