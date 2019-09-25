import React from "react";
import SignUpForm from "./SignUpForm";

let dialogStyles = {
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#A9A9A9",
  fontWeight: "bold",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column"
};

const ModalSignUp = props => {
  let popup = (
    <div style={dialogStyles}>
      <div style={{ marginTop: "20%" }}>
        <SignUpForm opener={props.modaler} id={props.id} />
      </div>
    </div>
  );

  if (!props.isOpen) {
    popup = null;
  }
  return <div>{popup}</div>;
};

export default ModalSignUp;
