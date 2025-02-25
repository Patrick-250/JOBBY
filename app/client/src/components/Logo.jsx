import logo from "../assets/images/logo.png";

const Logo = () => {
  const logoStyle = {
    width: "100px",
    height: "100px",
    display: "block",
    borderRadius: "50%",
    margin: "0 auto",
  };

  return <img src={logo} alt="logo" style={logoStyle} />;
};

export default Logo;
