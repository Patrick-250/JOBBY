import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import { FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          labelText="Name"
          defaultValue="Rumanzi"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Ty"
        />
        <FormRow
          type="text"
          name="location"
          labelText="Location"
          defaultValue="Rwanda"
        />
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue="rwandaful@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="*******"
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p className="member-text">
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
