import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#111",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    marginTop: "40px",
  };

  const logoContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
    flexWrap: "wrap",
  };

  const logoStyle = {
    height: "30px",
    objectFit: "contain",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#ccc",
  };

  return (
    <footer style={footerStyle}>
      <h4 style={{ marginBottom: "10px" }}>We Accept</h4>

      <div style={logoContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          alt="Visa"
          style={logoStyle}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          alt="MasterCard"
          style={logoStyle}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/PayPal_Logo_Icon_2014.svg"
          alt="PayPal"
          style={logoStyle}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/UPI-Logo-vector.svg"
          alt="UPI"
          style={logoStyle}
        />
      </div>

      <p style={textStyle}>
        © {new Date().getFullYear()} Blog App | Designed by{" "}
        <strong>PANDURANGA</strong>
      </p>
    </footer>
  );
};

export default Footer;
